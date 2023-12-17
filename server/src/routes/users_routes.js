const express = require('express');
const router = express.Router();
const { getAllUsers,
    getUserById,
    createNewUser,
    updateUserById,
    deleteUserById, getUserByEmail } = require('../controllers/users_controllers');

const { verifyToken, isAdminSystem } = require('../middlewares/verifyToken')

// Định tuyến các yêu cầu tới controller

router.get('/api/getAllUsers', verifyToken, isAdminSystem, getAllUsers);
router.get('/api/getUserById/:id', verifyToken, getUserById);
router.get('/api/getUserByEmail/:email', verifyToken, getUserByEmail);
router.post('/api/createUser', verifyToken, isAdminSystem, createNewUser);
router.put('/api/updateUser/:id', verifyToken, updateUserById);
router.delete('/api/deleteUser/:id', verifyToken, isAdminSystem, deleteUserById);

module.exports = router;
