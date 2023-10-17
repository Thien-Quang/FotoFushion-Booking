const { DataTypes } = require('sequelize');
const sequelize = require('../database/database'); // Import từ file cấu hình kết nối

const Account = sequelize.define('Account', {
    email: {
        type: DataTypes.STRING(50),
        primaryKey: true
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    role_id: {
        type: DataTypes.STRING(50),
        allowNull: false,
        references: {
            model: 'roles',
            key: 'id'
        }
    },
    phone_number: {
        type: DataTypes.STRING(20),
    }

},
    {
        tableName: 'account', // Tên của bảng trong cơ sở dữ liệu
        timestamps: false // Không tạo cột 'createdAt' và 'updatedAt'
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