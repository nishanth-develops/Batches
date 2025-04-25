import express from 'express'
import {batchesList, getBatchesByYear, getUserById, loginUser, usersList} from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js';

const userRoute = express.Router();

// GET all batches

userRoute.post('/login', loginUser);
userRoute.get('/batches-list', batchesList);
userRoute.get('/users-list',authUser, usersList);
userRoute.get('/users-list/:id',authUser, getUserById);
userRoute.get('/batches-list/:year', authUser, getBatchesByYear)


export default userRoute