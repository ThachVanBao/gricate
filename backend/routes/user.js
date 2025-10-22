const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Định nghĩa route
router.get('/', (req, res) => {
  res.send('User route');
});

module.exports = router;


const userRoutes = require('./routes/user');
app.use('/users', userRoutes);

const userController = require('../controllers/userController');
router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.post('/', userController.addUser);
router.put('/users/:id', userController.updateUser); // PUT
router.delete('/users/:id', userController.deleteUser); // DELETE
module.exports = router;