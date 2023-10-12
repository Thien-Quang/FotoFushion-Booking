const { Sequelize, DataTypes } = require('sequelize');

// Khởi tạo kết nối đến cơ sở dữ liệu MySQL
const sequelize = require('../database/database');

// Định nghĩa mô hình cho bảng "photography_room"
const PhotographyRoom = sequelize.define('PhotographyRoom', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  name: DataTypes.STRING(100),
  is_status: DataTypes.BOOLEAN,
  category: DataTypes.STRING(50),
  price: DataTypes.DECIMAL(18, 3)
}, {
  tableName: 'photography_room', // Tên của bảng trong cơ sở dữ liệu
  timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});

// Synchronize mô hình với cơ sở dữ liệu
sequelize.sync()
  .then(() => {
    console.log('Mô hình PhotographyRoom đã được đồng bộ hóa với cơ sở dữ liệu.');
  })
  .catch(error => {
    console.error('Lỗi khi đồng bộ hóa mô hình PhotographyRoom:', error);
  });

module.exports = PhotographyRoom;
