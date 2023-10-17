const express = require('express');
const router = express.Router();
const { getAllCostumes, getCostumeById, createNewCostume, updateCostumeById, deleteCostumeById } = require('../controllers/costume_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllCostumes', getAllCostumes);
router.get('/api/getCostumeById/:id', getCostumeById);
router.post('/api/createNewCostume', createNewCostume);
router.put('/api/updateCostumeById/:id', updateCostumeById);
router.delete('/api/deleteCostumeById/:id', deleteCostumeById);

module.exports = router;
