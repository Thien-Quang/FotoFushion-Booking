const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Import từ file cấu hình kết nối

// Định nghĩa mô hình cho bảng "equipment"
const Equipment = sequelize.define('Equipment', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  name: DataTypes.STRING(100),
  category: DataTypes.STRING(50),
  price: DataTypes.DECIMAL(18, 3),
  quantity: DataTypes.INTEGER
}, {
  tableName: 'equipment', // Tên của bảng trong cơ sở dữ liệu
  timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});


module.exports = Equipment;