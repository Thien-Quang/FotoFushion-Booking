const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Import từ file cấu hình kết nối



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


module.exports = CartItem;
