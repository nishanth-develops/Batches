// const express = require("express");
// const clerkAuth = require("../middleware/clerkAuth");
// const router = express.Router();

// // Check if user is admin
// const isAdmin = async (req, res, next) => {
//   try {
//     const user = await User.findOne({ clerkId: req.auth.userId });

//     if (!user || user.role !== "admin") {
//       return res.status(403).json({ error: "Access denied. Admin privileges required." });
//     }

//     next();
//   } catch (error) {
//     console.error("Admin check error:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// };

// router.use(clerkAuth, isAdmin);

// router.get('/dashboard', (req, res) => {
//   res.json({ message: 'Welcome to the admin dashboard!' });
// });

// module.exports = router;
