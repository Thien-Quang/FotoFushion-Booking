const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const User = require('./users_models'); // Import mô hình User

const Cart = sequelize.define('Cart', {
    id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    user_id: DataTypes.STRING(50),
    total_quantity: DataTypes.DECIMAL(18, 3),
    total_price: DataTypes.DECIMAL(18, 3),
}, {
    tableName: 'cart',
    timestamps: false,
});

Cart.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

Cart.sync()
    .then(() => {
        console.log('Mô hình Cart đã được đồng bộ hóa với cơ sở dữ liệu.');
    })
    .catch(error => {
        console.error('Lỗi khi đồng bộ hóa mô hình Cart:', error);
    });

module.exports = Cart;
