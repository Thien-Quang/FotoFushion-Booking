const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Import từ file cấu hình kết nối

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




module.exports = Comment;
