const { Sequelize, DataTypes } = require('sequelize');

// Khởi tạo kết nối đến cơ sở dữ liệu MySQL
const sequelize = new Sequelize('fotofusion', 'root', 'ThieN181201@', {
  host: 'localhost', // Địa chỉ máy chủ MySQL của bạn
  dialect: 'mysql'
});

// Định nghĩa mô hình cho bảng "video"
const Video = sequelize.define('Video', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  albums_id: DataTypes.STRING(50),
  url_video: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  name: DataTypes.STRING
});

// Synchronize mô hình với cơ sở dữ liệu
Video.sync()
  .then(() => {
    console.log('Mô hình Video đã được đồng bộ hóa với cơ sở dữ liệu.');
  })
  .catch(error => {
    console.error('Lỗi khi đồng bộ hóa mô hình Video:', error);
  });

module.exports = Video;
