const express = require('express');
const router = express.Router();
const { getAllVouchers,
    getVoucherById,
    createNewVoucher,
    updateVoucherById,
    deleteVoucherById } = require('../controllers/voucher_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllVouchers', getAllVouchers);
router.get('/api/getVoucherById/:id', getVoucherById);
router.post('/api/createVoucher', createNewVoucher);
router.put('/api/updateVoucher/:id', updateVoucherById);
router.delete('/api/deleteVoucher/:id', deleteVoucherById);

module.exports = router;
