const express = require('express');
const router = express.Router();
const { getAllProducts,
    getProductById,
    createNewProduct,
    updateProductById,
    deleteProductById } = require('../controllers/product_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllProducts', getAllProducts);
router.get('/api/getProductById/:id', getProductById);
router.post('/api/createProduct', createNewProduct);
router.put('/api/updateProduct/:id', updateProductById);
router.delete('/api/deleteProduct/:id', deleteProductById);

module.exports = router;
