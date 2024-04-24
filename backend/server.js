const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

// Initialize express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/schoolManagement', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log('MongoDB connection error:', error));

// Import User model
const User = require('./models/user.model');  // Assuming the file name is user.model.js

// Import route files
const studentsRoutes = require('./routes/students');
const academicsRoutes = require('./routes/academics');
const gradingRoutes = require('./routes/grading');
const staffRoutes = require('./routes/staff');
const feesRoutes = require('./routes/fees');

// Use routes
app.use('/api/students', studentsRoutes);
app.use('/api/academics', academicsRoutes);
app.use('/api/grading', gradingRoutes);
app.use('/api/staff', staffRoutes);
app.use('/api/fees', feesRoutes);

// Login endpoint
// Login endpoint
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });

    console.log('User:', user);  // Log retrieved user

    // Validate user and password
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (isPasswordValid) {
        res.json({ message: 'Login successful' });
      } else {
        console.log('Invalid password:', password);  // Log invalid password
        res.status(401).json({ message: 'Invalid email or password' });
      }
    } else {
      console.log('User not found:', email);  // Log user not found
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user with given email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    console.log('New user saved:', newUser);  // Log new user

    res.json({ message: 'Signup successful' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

  

// Define port
const PORT = 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
