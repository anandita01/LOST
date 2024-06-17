const express = require('express');
const router = express.Router();
const Student = require('../models/Student');
const { createTokenForStudent } = require('../services/authentications');

// Signup route
router.get('/signup', (req, res) => {
    return res.render('signup');
});

router.post('/signup', async (req, res) => {
    try {
        const data = req.body; // Extracting data from the request
        const newStudent = new Student(data); // Creating new object and storing data in that
        await newStudent.save(); // Saving new data

        const token = createTokenForStudent(newStudent);

        res.cookie("token", token).redirect('/lost');
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: 'Internal Server Error' });
    }
});

// Login route
router.get('/login', (req, res) => {
    return res.render('login');
});

router.post('/login', async (req, res) => {
    // Extract email and password from the body
    try {
        const { email, password } = req.body;

        // Find the student by email
        const user = await Student.findOne({ email: email });

        // If student does not exist or password does not match, return error
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const token = createTokenForStudent(user);

        res.cookie("token", token).redirect('/lost');
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// View profile route
router.get('/profile', async (req, res) => {
    // Profile logic here
});

module.exports = router;
