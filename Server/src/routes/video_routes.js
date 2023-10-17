const express = require('express');
const router = express.Router();
const { getAllVideos,
    getVideoById,
    createNewVideo,
    updateVideoById,
    deleteVideoById } = require('../controllers/video_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllVideos', getAllVideos);
router.get('/api/getVideoById/:id', getVideoById);
router.post('/api/createVideo', createNewVideo);
router.put('/api/updateVideo/:id', updateVideoById);
router.delete('/api/deleteVideo/:id', deleteVideoById);

module.exports = router;
