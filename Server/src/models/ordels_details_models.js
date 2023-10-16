const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Order = require('./orders_models');
const Product = require('./product_models');

const OrderDetail = sequelize.define('order_detail', {
    id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    order_id: {
        type: DataTypes.STRING(50),
        references: {
            model: Order,
            key: 'id',
        },
    },
    prod_id: {
        type: DataTypes.STRING(50),
        references: {
            model: Product,
            key: 'id',
        },
    },
    quantity: {
        type: DataTypes.INTEGER,
    },
    unit_price: {
        type: DataTypes.DECIMAL(18, 3),
    },
    shipping_fee: {
        type: DataTypes.DECIMAL(18, 3),
    },
    total_price: {
        type: DataTypes.DECIMAL(18, 3),
    },
}, {
    tableName: 'order_detail',
    timestamps: false,
});

OrderDetail.belongsTo(Order, { foreignKey: 'order_id', targetKey: 'id' });
OrderDetail.belongsTo(Product, { foreignKey: 'prod_id', targetKey: 'id' });

module.exports = OrderDetail;