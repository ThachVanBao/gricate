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
