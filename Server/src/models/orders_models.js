const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const User = require('./users_models');

const Order = sequelize.define('order', {
    id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    payment_method: {
        type: DataTypes.STRING(100),
    },
    order_date: {
        type: DataTypes.DATE,
    },
    total_amount: {
        type: DataTypes.FLOAT,
    },
    user_id: {
        type: DataTypes.STRING(50),
        references: {
            model: User,
            key: 'id',
        },
    },
}, {
    tableName: 'orders',
    timestamps: false,
});

Order.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

module.exports = Order;