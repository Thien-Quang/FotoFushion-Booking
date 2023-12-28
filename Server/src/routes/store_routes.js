const express = require('express');
const router = express.Router();
const { getAllProductAndImg, addProductToCart, getAllCartByUser} = require('../controllers/store_controller');

const { verifyToken, isAdminSystem } = require('../middlewares/verifyToken')

router.get('/api/getAllProductAndImg',  getAllProductAndImg);
router.put('/api/addProductToCart',  addProductToCart);
router.get('/api/getAllProductByUser',  getAllCartByUser);
module.exports = router;