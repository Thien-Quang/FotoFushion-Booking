const { Sequelize, DataTypes } = require('sequelize');

// Khởi tạo kết nối đến cơ sở dữ liệu MySQL
const sequelize = require('../database/database');

// Định nghĩa mô hình cho bảng "cart_items"
const CartItem = sequelize.define('CartItem', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  cart_id: DataTypes.STRING(50),
  prod_id: DataTypes.STRING(50),
  quantity: DataTypes.DECIMAL(18, 3),
  price: DataTypes.DECIMAL(18, 3)
}, {
  tableName: 'cart_items', // Tên của bảng trong cơ sở dữ liệu
  timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});

// Synchronize mô hình với cơ sở dữ liệu
sequelize.sync()
  .then(() => {
    console.log('Mô hình CartItem đã được đồng bộ hóa với cơ sở dữ liệu.');
  })
  .catch(error => {
    console.error('Lỗi khi đồng bộ hóa mô hình CartItem:', error);
  });

module.exports = CartItem;
