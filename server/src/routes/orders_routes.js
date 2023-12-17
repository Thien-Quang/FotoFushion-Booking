const express = require('express');
const router = express.Router();
const { getAllOrders,
    getOrderById,
    createNewOrder,
    updateOrderById,
    deleteOrderById } = require('../controllers/orders_controllers');
const { verifyToken, isAdminSystem } = require('../middlewares/verifyToken')


// Định tuyến các yêu cầu tới controller

//Admin

router.get('/api/getAllOrders', verifyToken, isAdminSystem, getAllOrders);
router.get('/api/getOrderById/:id', verifyToken, isAdminSystem, getOrderById);
router.post('/api/createOrder', verifyToken, isAdminSystem, createNewOrder);
router.put('/api/updateOrder/:id', verifyToken, isAdminSystem, updateOrderById);
router.delete('/api/deleteOrder/:id', verifyToken, isAdminSystem, deleteOrderById);

module.exports = router;
