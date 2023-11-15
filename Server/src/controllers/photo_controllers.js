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
const getAllPhotosByAlbumsId = async (req, res) => {
    try {
        const albums_id = req.params.albums_id;
        console.log(albums_id);
        //const albumId = 'ef8440bc-e6b3-42e0-9c9b-b8c7366ce168'

        const photos = await PhotoService.getPhotosByAlbumId(albums_id);
        res.json(photos);
    } catch (error) {
        console.error('Lỗi khi lấy danh sách ảnh:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy danh sách ảnh.' });
    }
};
const getAllPhotosByCostumerId = async (req, res) => {
    try {
        const costumer_id = req.params.costumer_id;
        console.log(costumer_id);
        //const albumId = 'ef8440bc-e6b3-42e0-9c9b-b8c7366ce168'

        const photos = await PhotoService.getPhotosByCostumerId(costumer_id);
        res.json(photos);
    } catch (error) {
        console.error('Lỗi khi lấy danh sách ảnh:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy danh sách ảnh.' });
    }
};
const getAllPhotosByRoomId = async (req, res) => {
    try {
        const costumer_id = req.params.costumer_id;
        console.log(costumer_id);
        //const albumId = 'ef8440bc-e6b3-42e0-9c9b-b8c7366ce168'

        const photos = await PhotoService.getAllPhotosByRoomId(costumer_id);
        res.json(photos);
    } catch (error) {
        console.error('Lỗi khi lấy danh sách ảnh:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy danh sách ảnh.' });
    }
};
const getAllPhotosByProductId = async (req, res) => {
    try {
        const prod_id = req.params.prod_id;
        console.log(prod_id);
        //const albumId = 'ef8440bc-e6b3-42e0-9c9b-b8c7366ce168'

        const photos = await PhotoService.getAllPhotosByProductId(prod_id);
        res.json(photos);
    } catch (error) {
        console.error('Lỗi khi lấy danh sách ảnh:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy danh sách ảnh.' });
    }
};
const getAllPhotosByBlogId = async (req, res) => {
    try {
        const blog_id = req.params.blog_id;
        console.log(blog_id);
        //const albumId = 'ef8440bc-e6b3-42e0-9c9b-b8c7366ce168'

        const photos = await PhotoService.getAllPhotosByBlogId(blog_id);
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
        const inputData = req.body;
        const id = uuidv4();
        const photoData = { id, ...inputData };
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
    deletePhotoById,
    getAllPhotosByAlbumsId,
    getAllPhotosByCostumerId,
    getAllPhotosByRoomId,
    getAllPhotosByProductId,
    getAllPhotosByBlogId
};
