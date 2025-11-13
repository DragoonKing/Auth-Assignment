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

📝 Notes

    This frontend is designed to work with the Express.js backend in the backend project
    Make sure both projects are running for full functionality
    The backend must be deployed and accessible for production use
    For local development, the backend should run on port 5000
