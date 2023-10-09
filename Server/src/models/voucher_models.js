const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');


const Voucher = sequelize.define('voucher', {
    id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    value: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'voucher',
    timestamps: false,
});

module.exports = Voucher;