const express = require('express');
const router = express.Router();
const { getAllCartItems,
    getCartItemById,
    createNewCartItem,
    updateCartItemById,
    deleteCartItemById } = require('../controllers/calendar_controllers');
const { verifyToken, isAdminSystem } = require('../middlewares/verifyToken')

// router.use(verifyToken)
// Định tuyến các yêu cầu liên quan đến lịch (calendar) tới controller
router.get('/api/getAllCalendars', verifyToken, getAllCartItems);
router.get('/api/getCalendarById/:id', verifyToken, getCartItemById);
router.post('/api/createNewCalendar', verifyToken, createNewCartItem);
router.put('/api/updateCalendarById/:id', verifyToken, isAdminSystem, updateCartItemById);
router.delete('/api/deleteCalendarById/:id', verifyToken, isAdminSystem, deleteCartItemById);

module.exports = router;
