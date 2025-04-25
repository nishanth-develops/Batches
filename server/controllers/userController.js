import { pool } from '../config/db.js';
import jwt from "jsonwebtoken"

const loginUser = async (req, res) => {
    try {
        const {email, password} =req.body
        const [user] = await pool.query('select * from users where email=? ', [email]);
        if(!user[0]){
            return res.json({success:false, message:"User not found"});
        }
        const isMatch = await bcrypt.compare(password, user[0].password);
        if(isMatch){
            const token = jwt.sign({id:user[0].id,}, process.env.JWT_SECRET,{expiresIn:"1d"});
            return res.json({success:true, message:"Login successful", token});
        } else {
            return res.json({success:false, message:"Invalid credentials"});
        }
    } catch (error) {
        console.log(error)
        return res.json({success:false, message:error.message});
    }
}


const batchesList = async (req, res) => {
    try {
        // Fetch all batches from the 'batches' table
        const [rows] = await pool.query('SELECT * FROM batches'); 
        const batches = rows.map(batch => ({
            ...batch,
            image: batch.img || null
          }));
        // Send the batches data as a JSON response
        res.json({success:true,batches});
    } catch (error) {
        console.error('Error fetching batches:', error);
        res.send(error.message);
    }
};

const usersList = async (req, res) => {
    try {
        const { batch_id, branch } = req.query; // ✅ Get batch & branch from query params
        let query = "SELECT id, name, img FROM users WHERE role = 'student'";
        const queryParams = [];

        if (batch_id) {
            query += " AND batch_id = ?";
            queryParams.push(batch_id);
        }

        if (branch) {
            query += " AND branch = ?";
            queryParams.push(branch);
        }

        const [rows] = await pool.query(query, queryParams);

        // Convert BLOB image to base64
        const users = rows.map(user => ({
            id: user.id,
            name: user.name,
            img: user.img ? `data:image/png;base64,${Buffer.from(user.img).toString("base64")}` : null
        }));

        res.json({ success: true, users });
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};


//get user by id 
const getUserById = async (req, res) => {
    try {
        const {userId} = req.params
        const userData = await pool.query('select * from users where id=?', [userId]);
        if(!userData[0]){
            res.json({success:false, message:"User not found"})
        }
        res.json({success:true, userData});
    } catch (error) {
        console.log(error)
        return res.json({success:false, message:error.message});
    }
}

const getBatchesByYear = async (req, res) => {
    try {
        const {year} = req.params
        const batchesData = await pool.query('select * from batches where year=?', [year]);
        if(!batchesData[0]){
            res.json({success:false, message:"Batches not found"})
        }
        res.json({success:true, batchesData});
    } catch (error) {
        console.log(error)
        return res.json({success:false, message:error.message});
    }
}


export {batchesList, loginUser, usersList, getUserById, getBatchesByYear};