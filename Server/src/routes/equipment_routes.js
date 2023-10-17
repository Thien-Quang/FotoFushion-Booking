const express = require('express');
const router = express.Router();
const { getAllEquipment, getEquipmentById, createNewEquipment, updateEquipmentById, deleteEquipmentById } = require('../controllers/equipment_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllEquipment', getAllEquipment);
router.get('/api/getEquipmentById/:id', getEquipmentById);
router.post('/api/createNewEquipment', createNewEquipment);
router.put('/api/updateEquipmentById/:id', updateEquipmentById);
router.delete('/api/deleteEquipmentById/:id', deleteEquipmentById);

module.exports = router;
