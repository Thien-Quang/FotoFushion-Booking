const express = require('express');
const router = express.Router();
const { getAllPromotionEvents,
    getPromotionEventById,
    createNewPromotionEvent,
    updatePromotionEventById,
    deletePromotionEventById } = require('../controllers/promotion_event_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllPromotionEvents', getAllPromotionEvents);
router.get('/api/getPromotionEventById/:id', getPromotionEventById);
router.post('/api/createPromotionEvent', createNewPromotionEvent);
router.put('/api/updatePromotionEvent/:id', updatePromotionEventById);
router.delete('/api/deletePromotionEvent/:id', deletePromotionEventById);

module.exports = router;
