const express = require('express');
const router = express.Router();
const { getAllCartItems,
    getCartItemById,
    createNewCartItem,
    updateCartItemById,
    deleteCartItemById } = require('../controllers/calendar_controllers');

// Định tuyến các yêu cầu liên quan đến lịch (calendar) tới controller
router.get('/api/getAllCalendars', getAllCartItems);
router.get('/api/getCalendarById/:id', getCartItemById);
router.post('/api/createNewCalendar', createNewCartItem);
router.put('/api/updateCalendarById/:id', updateCartItemById);
router.delete('/api/deleteCalendarById/:id', deleteCartItemById);

module.exports = router;
