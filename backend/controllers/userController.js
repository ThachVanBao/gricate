// Tạo mảng tạm để chứa người dùng
let users = [
  { id: 1, name: " Thạch Văn Bảo" },
  { id: 2, name: "Bá Huy" }
];

// Hàm xử lý GET /users
const getUsers = (req, res) => {
    
  res.json(users);
};

// Hàm xử lý POST /users
const addUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

module.exports = { getUsers, addUser };

// mảng tạm nếu chưa dùng MongoDB
// PUT: sửa user
exports.updateUser = (req, res) => {
 const { id } = req.params;
 const index = users.findIndex(u => u.id == id);
 if (index !== -1) {
 users[index] = { ...users[index], ...req.body };
 res.json(users[index]);
 } else {
 res.status(404).json({ message: "User not found" });
 }
};
// DELETE: xóa user
exports.deleteUser = (req, res) => {
 const { id } = req.params;
 users = users.filter(u => u.id != id);
 res.json({ message: "User deleted" });
};