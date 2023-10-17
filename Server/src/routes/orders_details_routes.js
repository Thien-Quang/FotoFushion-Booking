const express = require('express');
const router = express.Router();
const { getAllOrderDetails,
    getOrderDetailById,
    createNewOrderDetail,
    updateOrderDetailById,
    deleteOrderDetailById } = require('../controllers/orders_details_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllOrderDetails', getAllOrderDetails);
router.get('/api/getOrderDetailById/:id', getOrderDetailById);
router.post('/api/createNewOrderDetail', createNewOrderDetail);
router.put('/api/updateOrderDetailById/:id', updateOrderDetailById);
router.delete('/api/deleteOrderDetailById/:id', deleteOrderDetailById);

module.exports = router;
