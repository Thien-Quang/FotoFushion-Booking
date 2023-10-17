const { DataTypes } = require('sequelize');
const sequelize = require('../database/database');

const Costume = require('./costume');
const PhotoAlbum = require('./photo_Albums_models');
const PromotionEvent = require('./promotion_event');
const PhotographyRoom = require('./photography_room');
const User = require('./users_models');
const Product = require('./product_models');
const BlogPost = require('./blog_post_models');
const Equipment = require('./equipment');

const Photo = sequelize.define('photo', {
    id: {
        type: DataTypes.STRING(50),
        primaryKey: true,
    },
    img_name: {
        type: DataTypes.STRING(50),
    },
    url_photo: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    costume_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
        references: {
            model: Costume,
            key: 'id',
        },
    },
    albums_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
        references: {
            model: PhotoAlbum,
            key: 'id',
        },
    },
    event_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
        references: {
            model: PromotionEvent,
            key: 'id',
        },
    },
    room_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
        references: {
            model: PhotographyRoom,
            key: 'id',
        },
    },
    user_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
        references: {
            model: User,
            key: 'id',
        },
    },
    prod_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
        references: {
            model: Product,
            key: 'id',
        },
    },
    blog_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
        references: {
            model: BlogPost,
            key: 'id',
        },
    },
    equip_id: {
        type: DataTypes.STRING(50),
        allowNull: true,
        references: {
            model: Equipment,
            key: 'id',
        },
    },
}, {
    tableName: 'photos',
    timestamps: false,
});

Photo.belongsTo(Costume, { foreignKey: 'costume_id', targetKey: 'id' });
Photo.belongsTo(PhotoAlbum, { foreignKey: 'albums_id', targetKey: 'id' });
Photo.belongsTo(PromotionEvent, { foreignKey: 'event_id', targetKey: 'id' });
Photo.belongsTo(PhotographyRoom, { foreignKey: 'room_id', targetKey: 'id' });
Photo.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });
Photo.belongsTo(Product, { foreignKey: 'prod_id', targetKey: 'id' });
Photo.belongsTo(BlogPost, { foreignKey: 'blog_id', targetKey: 'id' });
Photo.belongsTo(Equipment, { foreignKey: 'equip_id', targetKey: 'id' });

module.exports = Photo;