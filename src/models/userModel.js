
const db = require('../config/db');
const bcrypt = require('bcryptjs');

const getAllUsers = async () => {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
};


const createUser = async (name, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
    await db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]);
};

module.exports = { getAllUsers, createUser };
