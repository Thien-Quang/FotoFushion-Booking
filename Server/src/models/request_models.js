const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');
const User = require('./users_models');

const Request = sequelize.define('request', {
    id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    user_id: {
        type: DataTypes.STRING(50),
        references: {
            model: User,
            key: 'id',
        },
    },
    img_url_old: {
        type: DataTypes.STRING(255),
    },
    img_url_new: {
        type: DataTypes.STRING(255),
    },
    is_status: {
        type: DataTypes.BOOLEAN,
    },
}, {
    tableName: 'request',
    timestamps: false,
});

Request.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

module.exports = Request;