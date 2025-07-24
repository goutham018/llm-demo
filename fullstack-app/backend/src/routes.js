// This file defines the routes for the backend application.

const express = require('express');
const router = express.Router();

// Example route for the home page
router.get('/', (req, res) => {
    res.send('Welcome to the Fullstack App API!');
});

// Example route for a sample resource
router.get('/api/resource', (req, res) => {
    res.json({ message: 'This is a sample resource.' });
});

// Add more routes as needed

module.exports = router;