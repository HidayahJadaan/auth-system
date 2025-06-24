# Simple Auth System
- main  ==> server.js ==> Entry point of the application.
- models folder ==> User.js.
- auth (or equivalent)==> Inside Controllers folder (authController & userController).
- routes (or equivalent)==> Inside routes folder (authRoutes & userRoutes).
- config (or equivalent)==> DB Settings and Connections.
- Additional files/modules==> Middleware folder ==> Protecting routes functionalities.
  
# Tech Stack
- Backend: Node.js + Express.js
- Database: MongoDB + Mongoose
- Auth: JWT (jsonwebtoken), bcryptjs
- Testing Tool: Postman

# Getting Started
1. clone the repo ==> git clone
2. install the dependencies ==> npm install
3. create .env file { PORT=4000
MONGODB_URI=mongodb://127.0.0.1:27017/authdb
JWT_SECRET=your_jwt_secret_key }
5. run the app ==> node server.js
6. test the routes using Postman ( Register / Login / Get User Info / Get Admin)
   - POST /api/auth/register
   - POST /api/auth/login
   - GET /api/auth/users/me
   - GET /api/auth/admin
