const mysql = require('mysql2/promise');
require('dotenv').config();

console.log("✅ MySQL Host:", process.env.MYSQLHOST);
console.log("✅ MySQL User:", process.env.MYSQLUSER);
console.log("✅ MySQL Port:", process.env.MYSQLPORT);

const pool = mysql.createPool({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQLDATABASE,
  port: process.env.MYSQLPORT,
  // waitForConnections: true,
  // connectionLimit: 10,
  // queueLimit: 0,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.getConnection()
.then(connection => {
  console.log('Successfully connected to the database.');
  connection.release();
})
.catch(err => {
  console.error('Error connecting to the database:', err);
});

async function testDB() {
  try {
    const conn = await pool.getConnection();
    console.log('✅ Successfully connected to MySQL!');
    conn.release();
  } catch (err) {
    console.error('❌ MySQL Connection Error:', err);
  }
}

testDB(); 

module.exports = pool;