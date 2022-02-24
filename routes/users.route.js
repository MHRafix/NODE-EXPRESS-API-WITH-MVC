const express = require('express');
const { getUsers, addUser } = require('../controllers/users.controller');
const router = express.Router();

// Get user route
router.get('/users', getUsers);

// Add user route
router.post('/users', addUser);

module.exports = router;