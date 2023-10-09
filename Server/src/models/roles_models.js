const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Role = sequelize.define('role', {
    id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },
}, {
    timestamps: false, // Tắt cột createdAt và updatedAt
});

Role.sync()
    .then(() => {
        console.log('Model đã được đồng bộ hóa với cơ sở dữ liệu.');
    })
    .catch(error => {
        console.error('Lỗi khi đồng bộ hóa model:', error);
    });

module.exports = Role;