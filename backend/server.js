const express = require('express');
const app = express();
const PORT = 3000;

// Sử dụng middleware để parse (phân tích) JSON data từ request body
// Điều này là cần thiết để xử lý dữ liệu gửi lên qua phương thức POST
app.use(express.json());

// ******************************************************
// Dữ liệu giả định (thay thế bằng kết nối Database thực tế)
// ******************************************************
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];
let nextId = 4;

// ******************************************************
// 1. API GET /users (Lấy danh sách người dùng)
// ******************************************************
app.get('/users', (req, res) => {
    console.log('GET request received for /users');
    
    // Gửi toàn bộ danh sách users dưới dạng JSON
    res.status(200).json(users);
});

// ******************************************************
// 2. API POST /users (Tạo người dùng mới)
// ******************************************************
app.post('/users', (req, res) => {
    const { name, email } = req.body;
    console.log('POST request received for /users with data:', req.body);

    // Kiểm tra dữ liệu đầu vào
    if (!name || !email) {
        return res.status(400).json({ error: 'Tên và Email là bắt buộc.' });
    }

    // Tạo đối tượng người dùng mới
    const newUser = {
        id: nextId++,
        name,
        email
    };

    // Thêm người dùng mới vào danh sách
    users.push(newUser);

    // Gửi phản hồi thành công (status 201 Created) và trả về đối tượng vừa tạo
    res.status(201).json(newUser);
});


// ******************************************************
// Khởi động Server
// ******************************************************
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});