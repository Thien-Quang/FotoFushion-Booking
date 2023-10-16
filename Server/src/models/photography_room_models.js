const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Import từ file cấu hình kết nối

// Định nghĩa mô hình cho bảng "photography_room"
const PhotographyRoom = sequelize.define('PhotographyRoom', {
  id: {
    type: DataTypes.STRING(50),
    primaryKey: true
  },
  name: DataTypes.STRING(100),
  is_status: DataTypes.BOOLEAN,
  category: DataTypes.STRING(50),
  price: DataTypes.DECIMAL(18, 3)
}, {
  tableName: 'photography_room', // Tên của bảng trong cơ sở dữ liệu
  timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});


module.exports = PhotographyRoom;
