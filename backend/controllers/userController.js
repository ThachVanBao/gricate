// Mảng tạm để lưu danh sách người dùng
let users = [
  { id: "1", name: "An", email: "an@gmail.com" },
  { id: "2", name: "Binh", email: "binh@gmail.com" }
];

// Đảm bảo chỉ có DUY NHẤT một hàm updateUser được export
exports.updateUser = (req, res) => {
  // id từ req.params luôn là chuỗi, không cần parseInt
  const { id } = req.params; 
  
  // So sánh chuỗi với chuỗi (đảm bảo id trong mảng cũng là chuỗi)
  const index = users.findIndex(u => u.id === id); 

  if (index !== -1) {
    // Cập nhật thông tin user bằng cách merge (cho phép cập nhật từng phần)
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]); 
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

// Lấy danh sách người dùng
exports.getUsers = (req, res) => {
  res.json(users);
};

// Thêm người dùng mới
exports.createUser = (req, res) => {
  const newUser = req.body;
  // SỬA: Chuyển ID mới thành chuỗi để thống nhất
  newUser.id = String(users.length + 1); 
  users.push(newUser);
  res.status(201).json(newUser);
};
// PUT: sửa user
exports.updateUser = (req, res) => {
  const { id } = req.params; // lấy id từ URL
  const index = users.findIndex(u => u.id == id); // tìm user theo id

  if (index !== -1) {
    // cập nhật thông tin user
    users[index] = { ...users[index], ...req.body };
    res.json(users[index]); // trả về user sau khi cập nhật
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
// controllers/userController.js
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  res.json({ message: `User ${id} updated`, name, email });
};

// Cập nhật người dùng theo id
exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "User not found" });
  }

  users[index] = { ...users[index], ...req.body };
  res.json(users[index]);
};

// DELETE: xóa user
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter(u => u.id != id);
  res.json({ message: "User deleted" });
};
