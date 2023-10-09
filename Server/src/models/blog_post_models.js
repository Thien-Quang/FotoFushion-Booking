const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./sequelize-config'); // Import từ file cấu hình kết nối

const BlogPost = sequelize.define('blog_post', {
    id: {
        type: DataTypes.STRING(50),
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING(50)
    },
    content: {
        type: DataTypes.TEXT,
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci'
    },
    author: {
        type: DataTypes.STRING(20)
    },
    date: {
        type: DataTypes.DATE
    }
});

// Đồng bộ hóa model với cơ sở dữ liệu
BlogPost.sync()
    .then(() => {
        console.log('Model đã được đồng bộ hóa với cơ sở dữ liệu.');
    })
    .catch(error => {
        console.error('Lỗi khi đồng bộ hóa model:', error);
    });

module.exports = BlogPost;