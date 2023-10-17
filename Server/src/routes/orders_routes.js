const express = require('express');
const router = express.Router();
const { getAllOrders,
    getOrderById,
    createNewOrder,
    updateOrderById,
    deleteOrderById } = require('../controllers/orders_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllOrders', getAllOrders);
router.get('/api/getOrderById/:id', getOrderById);
router.post('/api/createOrder', createNewOrder);
router.put('/api/updateOrder/:id', updateOrderById);
router.delete('/api/deleteOrder/:id', deleteOrderById);

module.exports = router;
