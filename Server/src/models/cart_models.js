const { Sequelize, DataTypes } = require('sequelize');

// Khởi tạo kết nối đến cơ sở dữ liệu MySQL
const sequelize = require('../database/database');

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
sequelize.sync()
  .then(() => {
    console.log('Mô hình Cart đã được đồng bộ hóa với cơ sở dữ liệu.');
  })
  .catch(error => {
    console.error('Lỗi khi đồng bộ hóa mô hình Cart:', error);
  });

module.exports = Cart;
