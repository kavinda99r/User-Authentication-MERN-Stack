# User-Authentication-MERN-Stack

A complete authentication system using the MERN stack, including user signup, login, and protected routes.

<h3>Features</h3>

- User Signup
- User Login
- Protected Routes
- JWT-based Authentication

<h3>Tech Stack</h3>

- Frontend: ReactJS, Tailwind CSS, React Toastify, Lucide Icons
- Backend: Node.js, Express.js, MongoDB

<h2>Installation Guide</h2>

<h3>Prerequisites</h3>

Ensure you have the following installed:

- Node.js
- MongoDB

<h3>Steps to Run the Project</h3>

Step 1 : Clone the Repository

Step 2 : Install Dependencies

Navigate to the frontend and backend directories separately and install dependencies:

```
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

<br>
Step 3 : Setup Environment Variables
   
Create a .env file inside the backend/ directory and add your credentials:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

<br>
Step 4 : Start the Development Servers

Run the backend:

```
cd backend
npm run start
```

Run the frontend:

```
cd frontend
npm run dev
```

<hr>
