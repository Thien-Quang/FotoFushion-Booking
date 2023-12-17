const express = require('express');
const router = express.Router();
const { getAllRequests,
    getRequestById,
    createNewRequest,
    updateRequestById,
    deleteRequestById } = require('../controllers/request_controllers');

const { verifyToken, isAdminSystem } = require('../middlewares/verifyToken')


// Định tuyến các yêu cầu tới controller
router.get('/api/getAllRequests', verifyToken, isAdminSystem, getAllRequests);
router.get('/api/getRequestById/:id', verifyToken, getRequestById);

router.post('/api/createRequest', verifyToken, createNewRequest);
router.put('/api/updateRequest/:id', verifyToken, updateRequestById);
router.delete('/api/deleteRequest/:id', verifyToken, deleteRequestById);

module.exports = router;
