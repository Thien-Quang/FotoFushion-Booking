const express = require('express');
const router = express.Router();
const { getAllPhotos,
    getPhotoById,
    createNewPhoto,
    updatePhotoById,
    deletePhotoById, getAllPhotosByAlbumsId } = require('../controllers/photo_controllers');
const { verifyToken, isAdminSystem } = require('../middlewares/verifyToken')


// Định tuyến các yêu cầu tới controller
router.get('/api/getAllPhotos', verifyToken, isAdminSystem, getAllPhotos);
router.get('/api/getPhotoById/:id', verifyToken, isAdminSystem, getPhotoById);
router.post('/api/createPhoto', verifyToken, isAdminSystem, createNewPhoto);
router.put('/api/updatePhoto/:id', verifyToken, isAdminSystem, updatePhotoById);
router.delete('/api/deletePhoto/:id', verifyToken, isAdminSystem, deletePhotoById);
router.get('/api/getAllPhotosByAlbumsId/:albums_id', getAllPhotosByAlbumsId);


module.exports = router;
