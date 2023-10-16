const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Import từ file cấu hình kết nối

// Định nghĩa mô hình cho bảng "cart"
const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  user_id: DataTypes.STRING(50),
  total_quantity: DataTypes.DECIMAL(18, 3),
  total_price: DataTypes.DECIMAL(18, 3)
}, {
  tableName: 'cart', // Tên của bảng trong cơ sở dữ liệu
  timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});

// Synchronize mô hình với cơ sở dữ liệu

module.exports = Cart;
