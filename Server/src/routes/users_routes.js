const express = require('express');
const router = express.Router();
const { getAllUsers,
    getUserById,
    createNewUser,
    updateUserById,
    deleteUserById } = require('../controllers/users_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllUsers', getAllUsers);
router.get('/api/getUserById/:id', getUserById);
router.post('/api/createUser', createNewUser);
router.put('/api/updateUser/:id', updateUserById);
router.delete('/api/deleteUser/:id', deleteUserById);

module.exports = router;
