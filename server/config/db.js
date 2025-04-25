import mysql from 'mysql2/promise';  // Use the 'promise' version to use async/await
import dotenv from 'dotenv';
dotenv.config();

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,         // Database host
  user: process.env.DB_USER,         // Database user
  password: process.env.DB_PASSWORD, // Database password
  database: process.env.DB_NAME,     // Database name
});

export { pool };
