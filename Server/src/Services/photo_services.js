const Photo = require('../models/photo_models');

class PhotoService {
    async getPhotoById(id) {
        try {
            const photo = await Photo.findByPk(id);
            return photo;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin ảnh:', error);
            throw error;
        }
    }

    async getAllPhotos() {
        try {
            const photos = await Photo.findAll();
            return photos;
        } catch (error) {
            console.error('Lỗi khi lấy danh sách ảnh:', error);
            throw error;
        }
    }

    async createPhoto(photoData) {
        try {
            const photo = await Photo.create(photoData);
            return photo;
        } catch (error) {
            console.error('Lỗi khi tạo ảnh:', error);
            throw error;
        }
    }

    async updatePhoto(id, photoData) {
        try {
            const photo = await Photo.findByPk(id);

            if (!photo) {
                return null;
            }

            await photo.update(photoData);
            return photo;
        } catch (error) {
            console.error('Lỗi khi cập nhật ảnh:', error);
            throw error;
        }
    }

    async deletePhoto(id) {
        try {
            const photo = await Photo.findByPk(id);

            if (!photo) {
                return false;
            }

            await photo.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa ảnh:', error);
            throw error;
        }
    }
}

module.exports = new PhotoService();
