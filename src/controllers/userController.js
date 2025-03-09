const User = require('../models/userModel');

const getUsers = async (req, res) => {
    try {
        const users = await User.getAllUsers();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        await User.createUser(name, email, password);
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { getUsers, createUser };
