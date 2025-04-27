import dotenv from 'dotenv';
dotenv.config();

import { faker } from '@faker-js/faker';
import { pool } from './config/db.js';


const seedDatabase = async () => {
  try {
    // 🔹 Seed Batches
    const batchIds = [];
    for (let i = 0; i < 5; i++) {
      const [res] = await pool.execute(
        `INSERT INTO batches (year, branch, section, img) VALUES (?, ?, ?, ?)`,
        [
          faker.date.past({ years: 5 }).getFullYear(),
          faker.helpers.arrayElement(['CSE', 'AIML', 'ECE', 'MECH']),
          faker.helpers.arrayElement(['A', 'B', 'C']),
          faker.image.urlPicsumPhotos()        ]
      );
      batchIds.push(res.insertId);
    }

    // 🔹 Seed Users (Students/Alumni)
    const userIds = [];
    for (let i = 0; i < 20; i++) {
      const [res] = await pool.execute(
        `INSERT INTO users (batch_id, name, email, password, branch, personal_details, role, skills, img)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          faker.helpers.arrayElement(batchIds),
          faker.person.fullName(),
          faker.internet.email(),
          faker.internet.password(),
          faker.helpers.arrayElement(['CSE', 'AIML', 'ECE']),
          faker.lorem.sentences(2),
          faker.helpers.arrayElement(['student', 'alumni']),
          faker.lorem.words(5),
          faker.image.urlPicsumPhotos()        
        ]
      );
      userIds.push(res.insertId);
    }

    // 🔹 Seed Companies
    const companyIds = [];
    for (let i = 0; i < 5; i++) {
      const [res] = await pool.execute(
        `INSERT INTO companies (name, img) VALUES (?, ?)`,
        [
          faker.company.name(),
          faker.image.urlPicsumPhotos()        ]
      );
      companyIds.push(res.insertId);
    }

    // 🔹 Seed Placements
    for (let i = 0; i < 10; i++) {
      await pool.execute(
        `INSERT INTO placements (comp_id, std_id, role, package, year)
         VALUES (?, ?, ?, ?, ?)`,
        [
          faker.helpers.arrayElement(companyIds),
          faker.helpers.arrayElement(userIds),
          faker.person.jobTitle(),
          faker.finance.amount(4, 15, 2) + ' LPA',
          faker.date.past({ years: 2 }).getFullYear(),
        ]
      );
    }

    // 🔹 Seed Projects
    for (let i = 0; i < 5; i++) {
      await pool.execute(
        `INSERT INTO projects (title, content, status, std_ids) VALUES (?, ?, ?, ?)`,
        [
          faker.commerce.productName(),
          faker.lorem.paragraph(),
          faker.helpers.arrayElement(['ongoing', 'completed', 'proposed']),
          faker.helpers.arrayElements(userIds, { min: 1, max: 4 }).join(','),
        ]
      );
    }

    // 🔹 Seed News
    for (let i = 0; i < 5; i++) {
      await pool.execute(
        `INSERT INTO news (branch_id, std_id, content, img) VALUES (?, ?, ?, ?)`,
        [
          faker.helpers.arrayElement(batchIds),
          faker.helpers.arrayElement(userIds),
          faker.lorem.sentence(),
          faker.image.urlPicsumPhotos()        ]
      );
    }

    console.log('✅ All data seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err);
    process.exit(1);
  }
};

seedDatabase();

//seed memories 

// import { faker } from '@faker-js/faker';
// import {pool} from './config/db.js'; // Import the MySQL connection pool

// // Function to seed memories
// const seedMemories = async () => {
//   const connection = await pool.getConnection(); // Get a database connection from the pool
//   try {
//     // Start a transaction for data consistency
//     await connection.beginTransaction();

//     // 🔹 Seed Batches first and collect batch IDs
//     const batchIds = [];
//     for (let i = 0; i < 5; i++) {
//       const [res] = await connection.execute(
//         `INSERT INTO batches (year, branch, section, img) VALUES (?, ?, ?, ?)`,
//         [
//           faker.date.past({ years: 5 }).getFullYear(),
//           faker.helpers.arrayElement(['CSE', 'AIML', 'ECE', 'MECH']),
//           faker.helpers.arrayElement(['A', 'B', 'C']),
//           Buffer.from(faker.image.avatar(), 'base64'), // placeholder image
//         ]
//       );
//       batchIds.push(res.insertId); // Save the generated batch ID
//     }

//     // 🔹 Seed Users (Students/Alumni) and collect user IDs
//     const userIds = [];
//     for (let i = 0; i < 20; i++) {
//       const [res] = await connection.execute(
//         `INSERT INTO users (batch_id, name, email, password, branch, personal_details, role, skills, img)
//          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
//         [
//           faker.helpers.arrayElement(batchIds), // Assign user to random batch
//           faker.person.fullName(),
//           faker.internet.email(),
//           faker.internet.password(),
//           faker.helpers.arrayElement(['CSE', 'AIML', 'ECE']),
//           faker.lorem.sentences(2),
//           faker.helpers.arrayElement(['student', 'alumni']),
//           faker.lorem.words(5),
//           Buffer.from(faker.image.avatar(), 'base64'),
//         ]
//       );
//       userIds.push(res.insertId); // Save the generated user ID
//     }

//     // 🔹 Seed Memories
//     for (let i = 0; i < 10; i++) {
//       const timestamp = faker.date.past({ years: 5 }); // Get a past date
//       const formattedTimestamp = timestamp.toISOString().slice(0, 19).replace('T', ' '); // Convert to 'YYYY-MM-DD HH:MM:SS'

//       await connection.execute(
//         `INSERT INTO memories (user_id, text, timestamp, batch_id, department) VALUES (?, ?, ?, ?, ?)`,
//         [
//           faker.helpers.arrayElement(userIds), // Random user ID
//           faker.lorem.sentence(), // Random memory text
//           formattedTimestamp, // Formatted timestamp in 'YYYY-MM-DD HH:MM:SS' format
//           faker.helpers.arrayElement(batchIds), // Random batch ID
//           faker.helpers.arrayElement(['CSE', 'AIML', 'ECE']), // Random department
//         ]
//       );
//     }

//     // Commit transaction if everything is successful
//     await connection.commit();
//     console.log('✅ Memories seeded successfully!');
//   } catch (err) {
//     // Rollback in case of an error
//     await connection.rollback();
//     console.error('❌ Seeding memories failed:', err);
//   } finally {
//     connection.release(); // Always release the connection back to the pool
//     process.exit(0); // Exit the script once done
//   }
// };

// // Run the seeding script
// seedMemories();
