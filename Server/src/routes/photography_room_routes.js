const express = require('express');
const router = express.Router();
const { getAllPhotographyRooms,
    getPhotographyRoomById,
    createNewPhotographyRoom,
    updatePhotographyRoomById,
    deletePhotographyRoomById } = require('../controllers/photography_room_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllPhotographyRooms', getAllPhotographyRooms);
router.get('/api/getPhotographyRoomById/:id', getPhotographyRoomById);
router.post('/api/createPhotographyRoom', createNewPhotographyRoom);
router.put('/api/updatePhotographyRoom/:id', updatePhotographyRoomById);
router.delete('/api/deletePhotographyRoom/:id', deletePhotographyRoomById);

module.exports = router;
