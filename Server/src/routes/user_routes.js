const express = require('express');
const router = express.Router();
const userController = require('../controllers/users_controllers');

// Định tuyến các yêu cầu tài khoản tới controller
router.use('/api', userController);

module.exports = router;