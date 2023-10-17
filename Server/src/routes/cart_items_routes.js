const express = require('express');
const router = express.Router();
const { getAllCartItems, getCartItemById, createNewCartItem, updateCartItemById, deleteCartItemById } = require('../controllers/cart_items_controllers');

// Định tuyến các yêu cầu liên quan đến các mục trong giỏ hàng (cart_items) tới controller
router.get('/api/getAllCartItems', getAllCartItems);
router.get('/api/getCartItemById/:id', getCartItemById);
router.post('/api/createNewCartItem', createNewCartItem);
router.put('/api/updateCartItemById/:id', updateCartItemById);
router.delete('/api/deleteCartItemById/:id', deleteCartItemById);

module.exports = router;
