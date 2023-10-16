const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Import từ file cấu hình kết nối

// Định nghĩa mô hình cho bảng "history_payment"
const HistoryPayment = sequelize.define('HistoryPayment', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  name: DataTypes.STRING(50),
  user_id: DataTypes.STRING(50),
  order_id: DataTypes.STRING(50),
  booking_id: DataTypes.STRING(50),
  payment_amount: DataTypes.DECIMAL(18, 3),
  date_create: DataTypes.DATE
}, {
  tableName: 'history_payment', // Tên của bảng trong cơ sở dữ liệu
  timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});


module.exports = HistoryPayment;
