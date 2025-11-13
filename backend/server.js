const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./src/config/db');

dotenv.config();

connectDB();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: 'Backend API is running',
    endpoints: {
      signup: 'POST /auth/signup',
      login: 'POST /auth/login',
      me: 'GET /auth/me (protected)'
    }
  });
});

app.use('/auth', require('./src/routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
