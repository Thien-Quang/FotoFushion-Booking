const express = require('express');
const router = express.Router();
const { getAllPhotoAlbums,
    getPhotoAlbumById,
    createNewPhotoAlbum,
    updatePhotoAlbumById,
    deletePhotoAlbumById } = require('../controllers/photo_albums_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllPhotoAlbums', getAllPhotoAlbums);
router.get('/api/getPhotoAlbumById/:id', getPhotoAlbumById);
router.post('/api/createPhotoAlbum', createNewPhotoAlbum);
router.put('/api/updatePhotoAlbum/:id', updatePhotoAlbumById);
router.delete('/api/deletePhotoAlbum/:id', deletePhotoAlbumById);

module.exports = router;
