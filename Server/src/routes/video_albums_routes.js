const express = require('express');
const router = express.Router();
const { getAllVideoAlbums,
    getVideoAlbumById,
    createNewVideoAlbum,
    updateVideoAlbumById,
    deleteVideoAlbumById } = require('../controllers/video_albums_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllVideoAlbums', getAllVideoAlbums);
router.get('/api/getVideoAlbumById/:id', getVideoAlbumById);
router.post('/api/createVideoAlbum', createNewVideoAlbum);
router.put('/api/updateVideoAlbum/:id', updateVideoAlbumById);
router.delete('/api/deleteVideoAlbum/:id', deleteVideoAlbumById);

module.exports = router;
