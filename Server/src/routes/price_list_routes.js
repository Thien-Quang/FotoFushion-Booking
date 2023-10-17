const express = require('express');
const router = express.Router();
const { getAllPriceLists,
    getPriceListById,
    createNewPriceList,
    updatePriceListById,
    deletePriceListById } = require('../controllers/price_list_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllPriceLists', getAllPriceLists);
router.get('/api/getPriceListById/:id', getPriceListById);
router.post('/api/createPriceList', createNewPriceList);
router.put('/api/updatePriceList/:id', updatePriceListById);
router.delete('/api/deletePriceList/:id', deletePriceListById);

module.exports = router;
