const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const User = require('./users_models');

const PhotoAlbum = sequelize.define('photo_album', {
    id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(50),
    },
    user_id: {
        type: DataTypes.STRING(50),
        references: {
            model: User,
            key: 'id',
        },
    },
    cover_photo: {
        type: DataTypes.STRING(255),
    },
    sum_photo: {
        type: DataTypes.INTEGER,
    },
    category: {
        type: DataTypes.STRING(50),
    },
    location: {
        type: DataTypes.STRING(50),
    },
    price: {
        type: DataTypes.DECIMAL(18, 3),
    },
    date_create: {
        type: DataTypes.DATE,
    },
}, {
    tableName: 'photo_albums',
    timestamps: false,
});

PhotoAlbum.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

module.exports = PhotoAlbum;