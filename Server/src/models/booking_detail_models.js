const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Import từ file cấu hình kết nối

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



module.exports = BookingDetail;
