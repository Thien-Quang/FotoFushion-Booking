const express = require('express');
const router = express.Router();
const AccountService = require('../services/account_services');


router.get('/getAllAcount', async (req, res) => {
    try {
        const accounts = await AccountService.getAllAccounts();
        res.json(accounts);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin tài khoản:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy thông tin tài khoản.' });
    }
});


// Lấy thông tin tài khoản bằng email
router.get('/getAccountByEmail/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const account = await AccountService.getAccountByEmail(email);
        res.json(account);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin tài khoản:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy thông tin tài khoản.' });
    }
});

// Tạo tài khoản mới
router.post('/createNewAccount', async (req, res) => {
    try {
        const accountData = req.body;
        const account = await AccountService.createAccount(accountData);
        res.status(201).json(account);
    } catch (error) {
        console.error('Lỗi khi tạo tài khoản:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi tạo tài khoản.' });
    }
});

// Cập nhật thông tin tài khoản
router.put('/updateAccountByEmail/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const accountData = req.body;
        const updatedAccount = await AccountService.updateAccount(email, accountData);

        if (!updatedAccount) {
            return res.status(404).json({ error: 'Không tìm thấy tài khoản.' });
        }

        res.json(updatedAccount);
    } catch (error) {
        console.error('Lỗi khi cập nhật tài khoản:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi cập nhật tài khoản.' });
    }
});

// Xóa tài khoản
router.delete('deleteAccountByEmail/:email', async (req, res) => {
    try {
        const email = req.params.email;
        const deleteResult = await AccountService.deleteAccount(email);

        if (!deleteResult) {
            return res.status(404).json({ error: 'Không tìm thấy tài khoản.' });
        }

        res.sendStatus(204);
    } catch (error) {
        console.error('Lỗi khi xóa tài khoản:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa tài khoản.' });
    }
});

module.exports = router;