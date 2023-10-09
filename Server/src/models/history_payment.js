const { Sequelize, DataTypes } = require('sequelize');

// Khởi tạo kết nối đến cơ sở dữ liệu MySQL
const sequelize = new Sequelize('fotofusion', 'root', 'ThieN181201@', {
  host: 'localhost', // Địa chỉ máy chủ MySQL của bạn
  dialect: 'mysql'
});

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

// Synchronize mô hình với cơ sở dữ liệu
sequelize.sync()
  .then(() => {
    console.log('Mô hình HistoryPayment đã được đồng bộ hóa với cơ sở dữ liệu.');
  })
  .catch(error => {
    console.error('Lỗi khi đồng bộ hóa mô hình HistoryPayment:', error);
  });

module.exports = HistoryPayment;
