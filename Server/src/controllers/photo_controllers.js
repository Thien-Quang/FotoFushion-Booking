const { v4: uuidv4 } = require('uuid');
const PhotoService = require('../services/photo_services');

// Lấy danh sách tất cả các ảnh
const getAllPhotos = async (req, res) => {
    try {
        const photos = await PhotoService.getAllPhotos();
        res.json(photos);
    } catch (error) {
        console.error('Lỗi khi lấy danh sách ảnh:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy danh sách ảnh.' });
    }
};

// Lấy thông tin ảnh bằng ID
const getPhotoById = async (req, res) => {
    try {
        const id = req.params.id;
        const photo = await PhotoService.getPhotoById(id);
        if (!photo) {
            return res.status(404).json({ error: 'Không tìm thấy ảnh.' });
        }

        res.json(photo);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin ảnh:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy thông tin ảnh.' });
    }
};

// Tạo ảnh mới
const createNewPhoto = async (req, res) => {
    try {
        const { img_name, url_photo, costume_id, albums_id, event_id, room_id, user_id, prod_id, blog_id, equip_id } = req.body;
        const id = uuidv4();
        const photoData = { id, img_name, url_photo, costume_id, albums_id, event_id, room_id, user_id, prod_id, blog_id, equip_id };
        const photo = await PhotoService.createPhoto(photoData);
        res.status(201).json(photo);
    } catch (error) {
        console.error('Lỗi khi tạo ảnh mới:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi tạo ảnh mới.' });
    }
};

// Cập nhật thông tin ảnh bằng ID
const updatePhotoById = async (req, res) => {
    try {
        const id = req.params.id;
        const photoData = req.body;
        const updatedPhoto = await PhotoService.updatePhoto(id, photoData);

        if (!updatedPhoto) {
            return res.status(404).json({ error: 'Ảnh không tồn tại' });
        }

        res.json(updatedPhoto);
    } catch (error) {
        console.error('Lỗi khi cập nhật ảnh:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi cập nhật ảnh.' });
    }
};

// Xóa ảnh bằng ID
const deletePhotoById = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteResult = await PhotoService.deletePhoto(id);

        if (!deleteResult) {
            return res.status(404).json({ error: 'Không tìm thấy ảnh.' });
        }

        res.sendStatus(204);
    } catch (error) {
        console.error('Lỗi khi xóa ảnh:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa ảnh.' });
    }
};

module.exports = {
    getAllPhotos,
    getPhotoById,
    createNewPhoto,
    updatePhotoById,
    deletePhotoById
};
