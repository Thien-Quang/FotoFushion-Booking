const express = require('express');
const router = express.Router();
const RoleService = require('../services/role_services');


router.get('/', async (req, res) => {
    try {
        const roles = await RoleService.getAllRoles();
        res.json(roles);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin tài khoản:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy thông tin tài khoản.' });
    }
});


// Lấy thông tin tài khoản bằng email
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const role = await RoleService.getRoleById(id);
        res.json(role);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin tài khoản:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy thông tin tài khoản.' });
    }
});

// Tạo tài khoản mới
router.post('/createNewRole', async (req, res) => {
    try {
        const roleData = req.body;
        const role = await RoleService.createRole(roleData);
        res.status(201).json(role);
    } catch (error) {
        console.error('Lỗi khi tạo tài khoản:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi tạo tài khoản.' });
    }
});

// Cập nhật thông tin tài khoản
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const roleData = req.body;
        const updatedRole = await RoleService.updateRole(id, roleData);

        if (!updatedRole) {
            return res.status(404).json({ error: 'Không tìm thấy tài khoản.' });
        }

        res.json(updatedRole);
    } catch (error) {
        console.error('Lỗi khi cập nhật tài khoản:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi cập nhật tài khoản.' });
    }
});

// Xóa tài khoản
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const deleteResult = await RoleService.deleteRole(id);

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