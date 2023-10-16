const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const Account = require('./account_models');
const Voucher = require('./voucher_models');

const User = sequelize.define('users', {
    id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(255),
    },
    phone_number: {
        type: DataTypes.STRING(20),
    },
    name: {
        type: DataTypes.STRING(50),
    },
    gender: {
        type: DataTypes.STRING(5),
    },
    voucher_id: {
        type: DataTypes.STRING(50),
        references: {
            model: Voucher,
            key: 'id',
        },
    },
}, {
    tableName: 'users',
    timestamps: false,
});

User.belongsTo(Account, { foreignKey: 'email', targetKey: 'email' });
User.belongsTo(Voucher, { foreignKey: 'voucher_id', targetKey: 'id' });

module.exports = User;