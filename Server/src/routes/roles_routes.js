const express = require('express');
const router = express.Router();
const { getAllRoles,
    getRoleById,
    createNewRole,
    updateRoleById,
    deleteRoleById } = require('../controllers/roles_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllRoles', getAllRoles);
router.get('/api/getRoleById/:id', getRoleById);
router.post('/api/createRole', createNewRole);
router.put('/api/updateRole/:id', updateRoleById);
router.delete('/api/deleteRole/:id', deleteRoleById);

module.exports = router;
