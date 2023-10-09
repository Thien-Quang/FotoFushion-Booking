const { Sequelize, DataTypes } = require('sequelize');

// Khởi tạo kết nối đến cơ sở dữ liệu MySQL
const sequelize = new Sequelize('fotofusion', 'root', 'ThieN181201@', {
  host: 'localhost',
  dialect: 'mysql'
});

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

// Synchronize mô hình với cơ sở dữ liệu
sequelize.sync()
  .then(() => {
    console.log('Mô hình VideoAlbum đã được đồng bộ hóa với cơ sở dữ liệu.');
  })
  .catch(error => {
    console.error('Lỗi khi đồng bộ hóa mô hình VideoAlbum:', error);
  });

module.exports = VideoAlbum;
