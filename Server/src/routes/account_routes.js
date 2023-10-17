const express = require('express');
const router = express.Router();
const { getAllAccount, getAccountByEmail, createNewAccount, updateAccountByEmail, deleteAccountByEmail } = require('../controllers/account_controllers');

// Định tuyến các yêu cầu tài khoản tới controller
router.get('/api/getAllAccount', getAllAccount);
router.get('/api/getAccountByEmail/:email', getAccountByEmail);
router.post('/api/createNewAccount', createNewAccount);
router.put('/api/updateAccountByEmail/:email', updateAccountByEmail);
router.delete('/api/deleteAccountByEmail/:email', deleteAccountByEmail);

module.exports = router;