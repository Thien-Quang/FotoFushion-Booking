const { Sequelize, DataTypes } = require('sequelize');

// Khởi tạo kết nối đến cơ sở dữ liệu MySQL
const sequelize = require('../database/database');

// Định nghĩa mô hình cho bảng "costume"
const Costume = sequelize.define('Costume', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  name: DataTypes.STRING(100),
  category: DataTypes.STRING(50),
  price: DataTypes.DECIMAL(18, 3),
  quantity: DataTypes.INTEGER
}, {
  tableName: 'costume', // Tên của bảng trong cơ sở dữ liệu
  timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});

// Synchronize mô hình với cơ sở dữ liệu
sequelize.sync()
  .then(() => {
    console.log('Mô hình Costume đã được đồng bộ hóa với cơ sở dữ liệu.');
  })
  .catch(error => {
    console.error('Lỗi khi đồng bộ hóa mô hình Costume:', error);
  });

module.exports = Costume;
