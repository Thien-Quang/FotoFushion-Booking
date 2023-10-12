const { Sequelize, DataTypes } = require('sequelize');
const Video_album = require('../models/video_albums_models')
// Khởi tạo kết nối đến cơ sở dữ liệu MySQL
const sequelize = require('../database/database');
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
  },
  {
    tableName: 'video', // Tên của bảng trong cơ sở dữ liệu
    timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
  });
Video.belongsTo(Video_album ,{foreignKey: 'albums_id', targetKey: 'id'});
// Synchronize mô hình với cơ sở dữ liệu
Video.sync()
  .then(() => {
    console.log('Mô hình Video đã được đồng bộ hóa với cơ sở dữ liệu.');
  })
  .catch(error => {
    console.error('Lỗi khi đồng bộ hóa mô hình Video:', error);
  });
// Video.findAll()
//   .then(video => {
//     console.log('Dữ liệu từ bảng "video":', video);
//   })
//   .catch(error => {
//     console.error('Lỗi khi lấy dữ liệu từ bảng "video":', error);
//   });
module.exports = Video;
