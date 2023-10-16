const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Import từ file cấu hình kết nối

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



module.exports = Calendar;
