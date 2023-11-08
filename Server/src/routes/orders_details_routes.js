const express = require('express');
const router = express.Router();
const { getAllOrderDetails,
    getOrderDetailById,
    createNewOrderDetail,
    updateOrderDetailById,
    deleteOrderDetailById } = require('../controllers/orders_details_controllers');
const { verifyToken, isAdminSystem } = require('../middlewares/verifyToken')


// Định tuyến các yêu cầu tới controller



//Admin
router.get('/api/getAllOrderDetails', verifyToken, isAdminSystem, getAllOrderDetails);
router.get('/api/getOrderDetailById/:id', verifyToken, isAdminSystem, getOrderDetailById);
router.post('/api/createNewOrderDetail', verifyToken, isAdminSystem, createNewOrderDetail);
router.put('/api/updateOrderDetailById/:id', verifyToken, isAdminSystem, updateOrderDetailById);
router.delete('/api/deleteOrderDetailById/:id', verifyToken, isAdminSystem, deleteOrderDetailById);

module.exports = router;
