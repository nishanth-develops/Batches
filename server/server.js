import cors from 'cors';
import express from 'express';
import 'dotenv/config';
import userRoute from './routes/userRoute.js';
import clerkAuth from './middlewares/clerkAuth.js';

// App configuration
const app = express();
const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("🛬 Request reached server.js:", req.method, req.originalUrl);
  next();
});


// Middlewares
app.use(cors()); // Allow frontend to connect with backend
app.use(express.json());


// API endpoints
app.use('/api/user', userRoute);

// Protected route (Moved below `app` initialization)
app.use('/api/protected', clerkAuth, (req, res) => {
  res.json({ message: `Hello, ${req.auth.userId}! You are authenticated.` });
});

// Start the server

app.listen(port, () => console.log(`Server started on port ${port}`));
