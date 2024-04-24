// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

// Register route
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login route
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).send({ error: 'Invalid credentials' });
    }

    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
