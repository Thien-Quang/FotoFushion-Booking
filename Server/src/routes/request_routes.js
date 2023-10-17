const express = require('express');
const router = express.Router();
const { getAllRequests,
    getRequestById,
    createNewRequest,
    updateRequestById,
    deleteRequestById } = require('../controllers/request_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllRequests', getAllRequests);
router.get('/api/getRequestById/:id', getRequestById);
router.post('/api/createRequest', createNewRequest);
router.put('/api/updateRequest/:id', updateRequestById);
router.delete('/api/deleteRequest/:id', deleteRequestById);

module.exports = router;
