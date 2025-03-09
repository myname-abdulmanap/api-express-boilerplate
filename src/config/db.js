const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, 
    queueLimit: 0
});

async function testDB() {
    try {
        const connection = await db.getConnection();
        await connection.ping(); 
        console.log('✅ Connected to database');
        connection.release();
    } catch (err) {
        console.error('❌ Error connecting to database:', err.message);
    }
}


testDB();

module.exports = db;
