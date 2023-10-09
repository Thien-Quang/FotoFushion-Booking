const { Sequelize, DataTypes } = require('sequelize');

// Cấu hình kết nối cơ sở dữ liệu
const sequelize = new Sequelize('fotofusion', 'root', 'ThieN181201@', {
  host: 'localhost',
  dialect: 'mysql'
});

// Định nghĩa mô hình Voucher
const Voucher = sequelize.define('Voucher', {
  id: {
    type: DataTypes.STRING(50), // Sử dụng kiểu dữ liệu STRING và đặt độ dài là 50
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(255), // Sử dụng kiểu dữ liệu STRING và đặt độ dài là 255
    allowNull: false
  },
  value: {
    type: DataTypes.STRING(255), // Sử dụng kiểu dữ liệu STRING và đặt độ dài là 255
    allowNull: false
  },
  start_date: {
    type: DataTypes.DATE, // Sử dụng kiểu dữ liệu DATE
    allowNull: false
  },
  end_date: {
    type: DataTypes.DATE, // Sử dụng kiểu dữ liệu DATE
    allowNull: false
  }
}, {
  tableName: 'voucher', // Tên của bảng trong cơ sở dữ liệu
  timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});

// Kiểm tra kết nối cơ sở dữ liệu và đồng bộ hóa mô hình
sequelize.authenticate()
  .then(() => {
    console.log('Kết nối cơ sở dữ liệu thành công');
    // Đồng bộ hóa mô hình Voucher với cơ sở dữ liệu, nhưng không tạo lại bảng
    return Voucher.sync({ force: false });
  })
  .then(() => {
    // Đoạn mã xử lý sau khi kết nối cơ sở dữ liệu và mô hình đã được đồng bộ hóa
  })
  .catch(error => {
    console.error('Lỗi kết nối cơ sở dữ liệu:', error);
  });
