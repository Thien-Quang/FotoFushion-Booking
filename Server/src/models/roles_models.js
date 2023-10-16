const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Role = sequelize.define('roles', {
    id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
}, {
    tableName: 'roles', // Tên của bảng trong cơ sở dữ liệu
    timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
});

Role.sync()
    .then(() => {
        console.log('Model đã được đồng bộ hóa với cơ sở dữ liệu.');
    })
    .catch(error => {
        console.error('Lỗi khi đồng bộ hóa model:', error);
    });

module.exports = Role;