import express from 'express';
import {
  batchesList,
  getBatchesByYear,
  getDepartmentByYearAndCode,
  getDepartmentsByYear,
  getMembersByBatchAndDepartment,
  getMemoryLaneByBatchAndDepartment,
  getUserById,
  loginUser,
  usersList,
  getCompaniesList,
  getCompanyDetailsByName
} from '../controllers/userController.js';
import authUser from '../middlewares/authUser.js';

const userRoute = express.Router();

// userRoute.post('/login', loginUser);

userRoute.get('/departments/:year',getDepartmentsByYear);

// 📌 Public batches list
userRoute.get('/batches-list', batchesList);

//get depts by year and name
userRoute.get('/departments/:year/:department', getDepartmentByYearAndCode);

//get memory lane
userRoute.get('/memory-lane/:batchYear/:department', getMemoryLaneByBatchAndDepartment);

//get initail members
userRoute.get("/members/:batchYear/:department", getMembersByBatchAndDepartment);

//get all companies
userRoute.get('/companies-list', getCompaniesList);

//get compnay details by name
userRoute.get('/companies-list/:name', getCompanyDetailsByName);

// 📌 Authenticated routes
// userRoute.get('/batches-list/:year', authUser, getBatchesByYear);
// userRoute.get('/users-list', authUser, usersList);
// userRoute.get('/users-list/:id', authUser, getUserById);

// 🚨 Catch-all route for /api/user/*
userRoute.use((req, res) => {
  console.log("❌ Unmatched route in /api/user:", req.originalUrl);
  res.status(404).json({ success: false, message: "Route not found inside /api/user" });
});

export default userRoute;
