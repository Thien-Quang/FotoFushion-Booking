const express = require('express');
const router = express.Router();
const { getAllHistoryPayments, getHistoryPaymentById, createNewHistoryPayment, updateHistoryPaymentById, deleteHistoryPaymentById } = require('../controllers/history_payment_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllHistoryPayments', getAllHistoryPayments);
router.get('/api/getHistoryPaymentById/:id', getHistoryPaymentById);
router.post('/api/createNewHistoryPayment', createNewHistoryPayment);
router.put('/api/updateHistoryPaymentById/:id', updateHistoryPaymentById);
router.delete('/api/deleteHistoryPaymentById/:id', deleteHistoryPaymentById);

module.exports = router;
