const { Sequelize, DataTypes } = require('sequelize');

// Khởi tạo kết nối đến cơ sở dữ liệu MySQL
const sequelize = require('../database/database');
const BookingDetail = require('./booking_detail_models');

// Định nghĩa mô hình cho bảng "calendar"
const Calendar = sequelize.define('Calendar', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  start_date: DataTypes.DATE,
  end_date: DataTypes.DATE,
  is_status: DataTypes.BOOLEAN,
  booking_id: DataTypes.STRING(50)
}, {
  tableName: 'calendar', // Tên của bảng trong cơ sở dữ liệu
  timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});
Calendar.belongsTo(BookingDetail, { foreignKey: 'booking_id', targetKey: 'id' });
// Synchronize mô hình với cơ sở dữ liệu
sequelize.sync()
  .then(() => {
    console.log('Mô hình Calendar đã được đồng bộ hóa với cơ sở dữ liệu.');
  })
  .catch(error => {
    console.error('Lỗi khi đồng bộ hóa mô hình Calendar:', error);
  });

module.exports = Calendar;
