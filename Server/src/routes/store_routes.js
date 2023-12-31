const express = require('express');
const router = express.Router();
const { getAllProductAndImg, 
    addProductToCart, 
    getAllCartByUser,
    getProducDetailstAndImg,
    deleteProduct} = require('../controllers/store_controller');

const { verifyToken, isAdminSystem,  } = require('../middlewares/verifyToken')

router.get('/api/getAllProductAndImg',  getAllProductAndImg);
router.post('/api/addProductToCart',  addProductToCart);
router.post('/api/getAllProductByUser',  getAllCartByUser);
router.post('/api/getProductDetails',  getProducDetailstAndImg);
router.post('/api/deleteProduct',  deleteProduct);


module.exports = router;