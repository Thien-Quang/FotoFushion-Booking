const { Sequelize, DataTypes } = require('sequelize');

// Khởi tạo kết nối đến cơ sở dữ liệu MySQL
const sequelize = require('../database/database');

// Định nghĩa mô hình cho bảng "comments"
const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  user_id: DataTypes.STRING(50),
  vidab_id: DataTypes.STRING(50),
  phoab_id: DataTypes.STRING(50),
  prod_id: DataTypes.STRING(50),
  content: {
    type: DataTypes.TEXT,
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci'
  }
}, {
  tableName: 'comments', // Tên của bảng trong cơ sở dữ liệu
  timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});

// Synchronize mô hình với cơ sở dữ liệu
sequelize.sync()
  .then(() => {
    console.log('Mô hình Comment đã được đồng bộ hóa với cơ sở dữ liệu.');
  })
  .catch(error => {
    console.error('Lỗi khi đồng bộ hóa mô hình Comment:', error);
  });

module.exports = Comment;
