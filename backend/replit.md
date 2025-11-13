# Express.js MongoDB Authentication Backend

## Project Overview
This is a Node.js backend API built with Express.js and MongoDB Atlas, implementing JWT-based authentication with bcrypt password hashing. It provides secure user signup, login, and profile retrieval endpoints with role-based access control.

## Technology Stack
- **Runtime**: Node.js 20
- **Framework**: Express.js
- **Database**: MongoDB Atlas (cloud-hosted)
- **Authentication**: JWT (JSON Web Tokens)
- **Password Security**: bcrypt
- **ODM**: Mongoose

## Project Structure
```
/
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection configuration
│   ├── middleware/
│   │   └── auth.js            # JWT authentication middleware
│   ├── models/
│   │   └── User.js            # User schema with password hashing
│   └── routes/
│       └── auth.js            # Authentication routes
├── server.js                   # Main Express application
├── package.json
├── .env.example               # Environment variable template
└── README.md
```

## Key Features
1. **User Signup** - POST /auth/signup (creates user with hashed password)
2. **User Login** - POST /auth/login (returns JWT token)
3. **Get Current User** - GET /auth/me (protected, requires JWT)
4. **Role Support** - User and Admin roles
5. **CORS Enabled** - Ready for frontend integration

## Environment Variables
- `MONGO_URI` - MongoDB Atlas connection string
- `JWT_SECRET` - Secret key for JWT signing
- `PORT` - Server port (default: 5000)

## Recent Changes
- **2025-01-13**: Initial project setup with Express.js and MongoDB Atlas
- **2025-01-13**: Implemented JWT authentication system with bcrypt
- **2025-01-13**: Created User model with role-based access control
- **2025-01-13**: Set up CORS and security middleware

## Deployment Notes
- Backend designed for deployment on Render or Railway
- Server binds to 0.0.0.0:5000 for compatibility with cloud platforms
- Environment variables must be configured in deployment platform
- MongoDB Atlas is pre-configured (cloud database)

## User Preferences
- Clean folder structure with separation of concerns
- Comprehensive error handling and validation
- Security best practices (password hashing, JWT, CORS)
- RESTful API design patterns

## Next Steps (Future Enhancements)
- Frontend Next.js application (separate Replit project)
- Password reset functionality
- Email verification
- Admin-specific endpoints
- Rate limiting
- API documentation (Swagger/OpenAPI)
