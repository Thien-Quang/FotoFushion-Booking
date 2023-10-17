const express = require('express');
const router = express.Router();
const { getAllBookingDetails, getBookingDetailById, createNewBookingDetail, updateBookingDetailById, deleteBookingDetailById } = require('../controllers/booking_details_controllers');

// Định tuyến các yêu cầu liên quan đến chi tiết đặt phòng tới controller
router.get('/api/getAllBookingDetails', getAllBookingDetails);
router.get('/api/getBookingDetailById/:id', getBookingDetailById);
router.post('/api/createNewBookingDetail', createNewBookingDetail);
router.put('/api/updateBookingDetailById/:id', updateBookingDetailById);
router.delete('/api/deleteBookingDetailById/:id', deleteBookingDetailById);

module.exports = router;
