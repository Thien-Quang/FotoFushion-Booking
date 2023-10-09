const { Sequelize, DataTypes } = require('sequelize');

// Khởi tạo kết nối đến cơ sở dữ liệu MySQL
const sequelize = new Sequelize('fotofusion', 'root', 'ThieN181201@', {
  host: 'localhost', // Địa chỉ máy chủ MySQL của bạn
  dialect: 'mysql'
});

// Định nghĩa mô hình cho bảng "booking_detail"
const BookingDetail = sequelize.define('BookingDetail', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  user_id: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  photo_album_id: DataTypes.STRING(50),
  video_album_id: DataTypes.STRING(50),
  room_id: DataTypes.STRING(50),
  costume_id: DataTypes.STRING(50),
  equipment_id: DataTypes.STRING(50),
  payment_status: DataTypes.STRING(100),
  event_id: DataTypes.STRING(50),
  prod_id: DataTypes.STRING(50),
  price: DataTypes.DECIMAL(18, 3),
  booking_time: DataTypes.DATE
}, {
  tableName: 'booking_detail', // Tên của bảng trong cơ sở dữ liệu
  timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});

// Synchronize mô hình với cơ sở dữ liệu
sequelize.sync()
  .then(() => {
    console.log('Mô hình BookingDetail đã được đồng bộ hóa với cơ sở dữ liệu.');
  })
  .catch(error => {
    console.error('Lỗi khi đồng bộ hóa mô hình BookingDetail:', error);
  });

module.exports = BookingDetail;
