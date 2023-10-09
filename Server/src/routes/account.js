const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');

// Định tuyến các yêu cầu tài khoản tới controller
router.use('/api', accountController);

module.exports = router;