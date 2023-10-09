const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const PromotionEvent = sequelize.define('promotion_event', {
    id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(255),
    },
    description: {
        type: DataTypes.TEXT({ charset: 'utf8mb4', collate: 'utf8mb4_unicode_ci' }),
    },
    status: {
        type: DataTypes.BOOLEAN,
    },
    start_day: {
        type: DataTypes.DATE,
    },
    end_day: {
        type: DataTypes.DATE,
    },
    type: {
        type: DataTypes.STRING(50),
    },
}, {
    tableName: 'promotion_event',
    timestamps: false,
});

module.exports = PromotionEvent;