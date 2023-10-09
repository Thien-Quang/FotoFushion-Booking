const { Sequelize, DataTypes } = require('sequelize');

// Khởi tạo kết nối đến cơ sở dữ liệu MySQL
const sequelize = new Sequelize('fotofusion', 'root', 'ThieN181201@', {
  host: 'localhost', // Địa chỉ máy chủ MySQL của bạn
  dialect: 'mysql'
});

// Định nghĩa mô hình cho bảng "equipment"
const Equipment = sequelize.define('Equipment', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  name: DataTypes.STRING(100),
  category: DataTypes.STRING(50),
  price: DataTypes.DECIMAL(18, 3),
  quantity: DataTypes.INTEGER
}, {
  tableName: 'equipment', // Tên của bảng trong cơ sở dữ liệu
  timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});

// Synchronize mô hình với cơ sở dữ liệu
sequelize.sync()
  .then(() => {
    console.log('Mô hình Equipment đã được đồng bộ hóa với cơ sở dữ liệu.');
  })
  .catch(error => {
    console.error('Lỗi khi đồng bộ hóa mô hình Equipment:', error);
  });

module.exports = Equipment;