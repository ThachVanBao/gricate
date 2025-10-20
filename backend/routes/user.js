const express = require('express');
const router = express.Router();

// Định nghĩa route
router.get('/', (req, res) => {
  res.send('User route');
});

module.exports = router;


const userRoutes = require('./routes/user');
app.use('/users', userRoutes);