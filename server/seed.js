
const { faker } = require('@faker-js/faker');
const pool = require('./db'); // Your MySQL connection


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
          Buffer.from(faker.image.avatar(), 'base64'), // placeholder blob
        ]
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
          Buffer.from(faker.image.avatar(), 'base64'),
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
          Buffer.from(faker.image.avatar(), 'base64'),
        ]
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
          Buffer.from(faker.image.avatar(), 'base64'),
        ]
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
