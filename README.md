# Auth-Assignment
Next.js Authentication Frontend

A modern authentication frontend built with Next.js 15, TypeScript, and TailwindCSS.
🚀 Features

    User Authentication: Signup and Login pages with form validation
    Protected Routes: Dashboard accessible only to authenticated users
    Role-Based UI: Different welcome messages for User and Admin roles
    JWT Token Management: Secure token storage in localStorage
    Responsive Design: Beautiful, mobile-friendly UI with TailwindCSS
    TypeScript: Full type safety across the application
    Context API: Global authentication state management

📋 Pages
Public Pages

    Home (/) - Landing page with Sign Up and Login links
    Sign Up (/signup) - User registration form
    Log In (/login) - User authentication form

Protected Pages

    Dashboard (/dashboard) - User dashboard with profile information
        Displays: "Welcome, [NAME] (User)" or "Welcome, [NAME] (Admin)"
        Shows user details (name, email, role, ID)
        Special UI for Admin users
        Logout functionality

🛠️ Tech Stack

    Framework: Next.js 15 (App Router)
    Language: TypeScript
    Styling: TailwindCSS
    HTTP Client: Axios
    State Management: React Context API
    Routing: Next.js App Router

📁 Project Structure

frontend/
├── app/
│   ├── signup/
│   │   └── page.tsx           # Signup page
│   ├── login/
│   │   └── page.tsx           # Login page
│   ├── dashboard/
│   │   └── page.tsx           # Protected dashboard
│   ├── layout.tsx             # Root layout with AuthProvider
│   ├── page.tsx               # Home/landing page
│   └── globals.css            # Global styles with Tailwind
├── lib/
│   ├── api.ts                 # API functions (signup, login, getCurrentUser)
│   └── auth.tsx               # Auth context and useAuth hook
├── types/
│   └── index.ts               # TypeScript interfaces
├── components/                # Reusable components (if needed)
├── public/                    # Static assets
├── next.config.ts             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
├── package.json
├── .env.example
└── README.md

🚀 Getting Started
Prerequisites

    Node.js (v18 or higher)
    npm or yarn
    Running backend API (see backend project)

Installation

    Install dependencies

npm install

    Configure environment variables

Create a .env.local file in the root directory:

NEXT_PUBLIC_API_URL=http://localhost:5000

For production, update this to your deployed backend URL.

    Start the development server

npm run dev

The app will run on http://localhost:3000
🔧 Available Scripts

    npm run dev - Start development server
    npm run build - Build for production
    npm start - Start production server
    npm run lint - Run ESLint

🔐 Authentication Flow

    Sign Up: User creates account → Backend returns JWT token → Token stored in localStorage → Redirect to dashboard
    Log In: User authenticates → Backend returns JWT token → Token stored in localStorage → Redirect to dashboard
    Dashboard: Protected route checks for token → Fetches user data from /auth/me → Displays user info
    Logout: Removes token from localStorage → Redirects to login page

🎨 UI Features

    Beautiful Gradients: Modern blue-to-indigo gradient backgrounds
    Form Validation: Client-side validation for all inputs
    Error Handling: Clear error messages for failed requests
    Loading States: Loading indicators during API calls
    Responsive Design: Works on mobile, tablet, and desktop
    Role Badges: Visual distinction between User and Admin roles

🌐 API Integration

The frontend connects to the Express backend using Axios. All API calls include:

    Automatic JWT token attachment to requests
    Error handling with user-friendly messages
    TypeScript types for request/response data

API Endpoints Used

    POST /auth/signup - Create new user account
    POST /auth/login - Authenticate user
    GET /auth/me - Get current user information (protected)

📦 Deployment
Deploy to Vercel

    Push your code to GitHub

    Go to Vercel and sign in

    Import your repository

    Configure environment variables:
        Add NEXT_PUBLIC_API_URL with your deployed backend URL

    Deploy!

Vercel will automatically:

    Detect Next.js
    Install dependencies
    Build the project
    Deploy to production

Environment Variables for Production

NEXT_PUBLIC_API_URL=https://your-backend-url.com

Make sure your backend is deployed and accessible before deploying the frontend.
🔒 Security Features

    JWT Token Storage: Tokens stored in localStorage (can be upgraded to httpOnly cookies)
    Protected Routes: Automatic redirect to login if not authenticated
    Type Safety: TypeScript ensures type-safe API calls
    Input Validation: Client-side validation prevents invalid data submission
    Error Messages: Generic error messages to prevent information leakage

🧪 Testing the Application

    Start the backend server (see backend README)
    Start the frontend development server
    Navigate to http://localhost:3000
    Test the flow:
        Sign up with a new account
        Verify redirect to dashboard
        Check that user info is displayed correctly
        Log out
        Log in with the same credentials
        Verify you see the dashboard again

🎯 Future Enhancements

    Email verification
    Password reset functionality
    Remember me option
    Admin-specific pages and features
    User profile editing
    Social authentication (Google, GitHub)
    Form validation with Zod
    React Hook Form integration
    Toast notifications
    Dark mode support

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

    This frontend is designed to work with the Express.js backend in the backend project
    Make sure both projects are running for full functionality
    The backend must be deployed and accessible for production use
    For local development, the backend should run on port 5000
