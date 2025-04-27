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


//unused
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

const getCompaniesList = async (req, res) => {
  try {
    // Fetch all companies from the 'companies' table
    const [rows] = await pool.query('SELECT * FROM companies');
    
    // Map through the companies data and handle the image field
    const companies = rows.map(company => ({
      ...company,
      imgUrl: company.img || null
    }));
    
    // Send the companies data as a JSON response
    res.json({ success: true, companies });
  } catch (error) {
    console.error('Error fetching companies:', error);
    res.status(500).send(error.message);
  }
};

// get user by id =- unused
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

//unused
const getBatchesByYear = async (req, res) => {
    try {
        const { year } = req.params;
        const batchesData = await pool.query('SELECT * FROM batches WHERE year=?', [year]);

        if (batchesData.length === 0) {
            return res.status(404).json({ success: false, message: "Batches not found" });
        }

        return res.json({ success: true, batches: batchesData });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};


const getDepartmentsByYear = async (req, res) => {
    try {
        const { year } = req.params;
        console.log("Year param:", year);
        console.log("Route hit: /departments/:year");
        const [departmentsData] = await pool.query(
            `SELECT 
               b.branch AS code,
               b.branch AS name, 
               b.img AS image,
               COUNT(u.id) AS totalStudents
             FROM batches b
             LEFT JOIN users u ON b.id = u.batch_id
             WHERE b.year = ?
             GROUP BY b.branch, b.img`,
            [year] // ← This is where the placeholder ? gets filled in
          );
        if (!departmentsData || departmentsData.length === 0) {
            return res.status(404).json({ success: false, message: "Departments not found" });
        }

        const departments = departmentsData.map(dep => ({
            ...dep,
            image: dep.image ? `data:image/jpeg;base64,${Buffer.from(dep.image).toString('base64')}` : null,
          }));

        return res.json({ success: true, departments });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }
};

const getDepartmentByYearAndCode = async (req, res) => {
    try {
      const { year, department } = req.params;
  
      const [results] = await pool.query(
        `SELECT 
           b.branch AS code,
           b.branch AS name,
           b.img AS image,
           COUNT(u.id) AS totalStudents
         FROM batches b
         LEFT JOIN users u ON b.id = u.batch_id
         WHERE b.year = ? AND b.branch = ?
         GROUP BY b.branch, b.img
         LIMIT 1`
        ,
        [year, department]
      );
  
      if (!results || results.length === 0) {
        return res.status(404).json({ success: false, message: "Department not found" });
      }
  
      return res.json({ success: true, department: results[0] });
    } catch (error) {
      console.error("Error fetching department:", error);
      return res.status(500).json({ success: false, message: "Server error" });
    }
  };
  

  const getMemoryLaneByBatchAndDepartment = async (req, res) => {
    try {
      const { batchYear, branch } = req.params;  // Notice 'branch' instead of 'department'
  
      // Fetching memories for the given batch year and branch
      const [results] = await pool.query(
        `SELECT 
          m.id,
          m.text,
          m.timestamp,
          u.name AS author_name,
          u.id AS author_id,
          u.img AS author_image
        FROM memories m
        JOIN users u ON m.author_id = u.id
        JOIN batches b ON u.batch_id = b.id
        WHERE b.year = ? AND u.branch = ? 
        ORDER BY m.timestamp DESC`,
        [batchYear, branch]
      );
  
      // If no results, return a message saying no memories found
      if (!results || results.length === 0) {
        return res.status(404).json({ success: false, message: "No memories found for this batch and branch." });
      }
  
      // Return the list of memories
      return res.json({ success: true, memories: results });
    } catch (error) {
      console.error("Error fetching memories:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  
  const getMembersByBatchAndDepartment = async (req, res) => {
    try {
      const { batchYear, department } = req.params;
  
      // Query to fetch members based on batchYear and department
      const [results] = await pool.query(
        `SELECT
          u.id,
          u.name,
          u.email,
          u.batch_id,
          u.branch AS department,
          u.img AS image,
          b.year AS batch
        FROM users u
        JOIN batches b ON u.batch_id = b.id
        WHERE b.year = ? AND u.branch = ?`,
        [batchYear, department]
      );
  
      if (results.length === 0) {
        return res.status(404).json({ success: false, message: "No members found for this batch and department." });
      }
  
      return res.json({ success: true, members: results });
    } catch (error) {
      console.error("Error fetching members:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  };

  const getCompanyDetailsByName = async (req, res) => {
    try {
      const { name } = req.params; // The company name will be passed in the URL
  
      // Query to fetch company details from the 'companies' table
      const [companyResults] = await pool.query(
        `SELECT id, name, img FROM companies WHERE name = ?`,
        [name]
      );
  
      if (companyResults.length === 0) {
        return res.status(404).json({ success: false, message: "Company not found" });
      }
  
      const company = companyResults[0];
  
      // Query to fetch students associated with the company from the 'placements' and 'users' tables
      const [studentsResults] = await pool.query(
        `SELECT
          u.id,
          u.name,
          u.email,
          u.branch,
          u.skills
        FROM users u
        JOIN placements p ON p.std_id = u.id
        JOIN companies c ON p.comp_id = c.id
        WHERE c.name = ?`,
        [name]
      );
  
      // Attach the students to the company object
      company.students = studentsResults;
  
      return res.json({ success: true, company });
    } catch (error) {
      console.error("Error fetching company details:", error);
      return res.status(500).json({ success: false, message: error.message });
    }
  };
  


export {batchesList, loginUser, usersList, getUserById, getBatchesByYear,  getDepartmentsByYear, getDepartmentByYearAndCode, getMemoryLaneByBatchAndDepartment,
    getMembersByBatchAndDepartment,
    getCompaniesList, getCompanyDetailsByName
};