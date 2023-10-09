const express = require('express');
const router = express.Router();
const roleController = require('../controllers/role');

// Định tuyến các yêu cầu tài khoản tới controller
router.use('/roles', roleController);

module.exports = router;