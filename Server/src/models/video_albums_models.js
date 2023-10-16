const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Import từ file cấu hình kết nối

// Định nghĩa mô hình cho bảng "video_albums"
const VideoAlbum = sequelize.define('VideoAlbum', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  name: DataTypes.STRING(50),
  cover_photo: DataTypes.STRING(255),
  sum_photo: DataTypes.INTEGER,
  category: DataTypes.STRING(50),
  location: DataTypes.STRING(100),
  price: DataTypes.DECIMAL(18, 3),
  date_create: DataTypes.DATE,
  user_id: DataTypes.STRING(50)

}, {
  tableName: 'video_albums', // Tên của bảng trong cơ sở dữ liệu
  timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});

module.exports = VideoAlbum;
