const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const UserService = require('../services/users_services');

// Lấy thông tin người dùng bằng ID
router.get('/getUserById/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await UserService.getUserById(userId);

        if (!user) {
            return res.status(404).json({ error: 'Người dùng không tồn tại' });
        }

        res.json(user);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy thông tin người dùng.' });
    }
});

// Tạo người dùng mới
router.post('/createUser', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const userId = uuidv4();
        const userData = { userId, username, email, password };
        const createdUser = await UserService.createUser(userData);
        res.status(201).json(createdUser);
    } catch (error) {
        console.error('Lỗi khi tạo người dùng:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi tạo người dùng.' });
    }
});

// Cập nhật thông tin người dùng
router.put('/updateUserById/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const { username, email, password } = req.body;
        const userData = { username, email, password };
        const updatedUser = await UserService.updateUser(userId, userData);

        if (!updatedUser) {
            return res.status(404).json({ error: 'Người dùng không tồn tại' });
        }

        res.json(updatedUser);
    } catch (error) {
        console.error('Lỗi khi cập nhật thông tin người dùng:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi cập nhật thông tin người dùng.' });
    }
});

// Xóa người dùng
router.delete('/deleteUserById/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const deleteResult = await UserService.deleteUser(userId);

        if (!deleteResult) {
            return res.status(404).json({ error: 'Người dùng không tồn tại' });
        }

        res.sendStatus(204);
    } catch (error) {
        console.error('Lỗi khi xóa người dùng:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa người dùng.' });
    }
});

module.exports = router;