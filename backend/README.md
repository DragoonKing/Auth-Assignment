# Express.js + MongoDB Atlas Backend API

A complete backend authentication system built with Express.js, MongoDB Atlas, JWT, and bcrypt.

## 🚀 Features

- **User Authentication**: Secure signup and login with JWT tokens
- **Password Security**: Bcrypt hashing for password storage
- **Role-Based Access**: Support for User and Admin roles
- **MongoDB Atlas**: Cloud database integration
- **Protected Routes**: JWT middleware for secure endpoints
- **CORS Enabled**: Cross-origin resource sharing configured

## 📋 API Endpoints

### Public Endpoints

#### POST `/auth/signup`
Create a new user account. All users are registered with the "User" role by default. Admin roles must be assigned manually in the database for security.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "User"
  }
}
```

#### POST `/auth/login`
Login with existing credentials.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "success": true,
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "User"
  }
}
```

### Protected Endpoints

#### GET `/auth/me`
Get current user information (requires authentication).

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response:**
```json
{
  "success": true,
  "user": {
    "id": "user_id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "User"
  }
}
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account

### Local Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd <project-directory>
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**

Create a `.env` file in the root directory with your actual credentials:
```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>
JWT_SECRET=your_jwt_secret_here
PORT=5000
FRONTEND_URL=http://localhost:3000
```

**Important:** Replace `<username>`, `<password>`, `<cluster>`, and `<database>` with your actual MongoDB Atlas credentials. Never commit the `.env` file to version control.

4. **Start the server**
```bash
npm start
```

The server will run on `http://localhost:5000`

## 📁 Project Structure

```
.
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── middleware/
│   │   └── auth.js            # JWT authentication middleware
│   ├── models/
│   │   └── User.js            # User model with bcrypt
│   └── routes/
│       └── auth.js            # Auth routes (signup, login, me)
├── server.js                   # Main application entry
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## 🔐 User Model Schema

```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  role: String (enum: ['User', 'Admin'], default: 'User'),
  timestamps: true
}
```

## 🌐 Deployment

### Deploy to Render

1. Push your code to GitHub
2. Go to [Render.com](https://render.com) and sign in
3. Click "New +" → "Web Service"
4. Connect your repository
5. Configure:
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Add environment variables:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `PORT` (usually 5000)
7. Click "Create Web Service"

### Deploy to Railway

1. Push your code to GitHub
2. Go to [Railway.app](https://railway.app) and sign in
3. Click "New Project" → "Deploy from GitHub repo"
4. Select your repository
5. Add environment variables in the "Variables" tab:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `PORT`
6. Railway will automatically deploy your app

## 🧪 Testing the API

### Using cURL

**Signup:**
```bash
curl -X POST http://localhost:5000/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"test123"}'
```

**Login:**
```bash
curl -X POST http://localhost:5000/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

**Get User (Protected):**
```bash
curl -X GET http://localhost:5000/auth/me \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

### Using Postman

1. Import the endpoints as a new collection
2. For protected routes, add the JWT token to the Authorization header
3. Set type to "Bearer Token"

## 🔒 Security Features

- **Password Hashing:** Bcrypt with salt rounds
- **JWT Authentication:** Secure token-based auth
- **Input Validation:** Email format and password length checks
- **Protected Routes:** Middleware-based route protection
- **CORS Configuration:** Controlled cross-origin access

## 📦 Dependencies

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **bcrypt** - Password hashing
- **jsonwebtoken** - JWT generation and verification
- **dotenv** - Environment variable management
- **cors** - Cross-origin resource sharing
- **cookie-parser** - Cookie parsing middleware

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URI` | MongoDB Atlas connection string | Yes |
| `JWT_SECRET` | Secret key for JWT signing | Yes |
| `PORT` | Server port (default: 5000) | No |
| `FRONTEND_URL` | Frontend URL for CORS (default: *) | No |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 📄 License

ISC

## 👨‍💻 Author

Your Name

---

**Note:** This is the backend API only. For the complete application, you'll need to set up a separate Next.js frontend project that connects to this API.
