const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET toàn bộ users
router.get('/', userController.getUsers);

// POST: tạo user mới
router.post('/', userController.createUser);

// PUT: cập nhật user theo id
router.put('/:id', userController.updateUser);

// DELETE: xóa user theo id
router.delete('/:id', userController.deleteUser);

module.exports = router;
