const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Product = sequelize.define('product', {
    id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
    },
    description: {
        type: DataTypes.TEXT({ charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci' }),
    },
    category: {
        type: DataTypes.STRING(20),
    },
    price: {
        type: DataTypes.DECIMAL(18, 3),
    },
    discounted_price: {
        type: DataTypes.DECIMAL(18, 3),
    },
}, {
    tableName: 'products',
    timestamps: false,
});

module.exports = Product;