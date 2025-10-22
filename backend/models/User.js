const mongoose = require('mongoose');

// Định nghĩa Schema (cấu trúc) cho collection 'User'
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {
    timestamps: true // Tự động thêm createdAt và updatedAt
});

// Tạo Model từ Schema
const User = mongoose.model('User', userSchema);

module.exports = User;
