const express = require('express');
const router = express.Router();
const { getAllPhotos,
    getPhotoById,
    createNewPhoto,
    updatePhotoById,
    deletePhotoById } = require('../controllers/photo_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllPhotos', getAllPhotos);
router.get('/api/getPhotoById/:id', getPhotoById);
router.post('/api/createPhoto', createNewPhoto);
router.put('/api/updatePhoto/:id', updatePhotoById);
router.delete('/api/deletePhoto/:id', deletePhotoById);

module.exports = router;
