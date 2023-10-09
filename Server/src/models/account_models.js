const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Import từ file cấu hình kết nối

const Account = sequelize.define('Account', {
    email: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        }
    }
});

// Đồng bộ hóa model với cơ sở dữ liệu
Account.sync()
    .then(() => {
        console.log('Model đã được đồng bộ hóa với cơ sở dữ liệu.');
    })
    .catch(error => {
        console.error('Lỗi khi đồng bộ hóa model:', error);
    });

module.exports = Account;