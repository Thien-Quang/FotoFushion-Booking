const StoreService = require('../Services/store_service')
const User = require('../models/users_models');
const jwt = require('jsonwebtoken');

const getAllProductAndImg = async (req, res) => {
    try {
        
        const store = await StoreService.getProductsAndPhotos();
        
        res.status(200).json(store);

        
    } catch (error) {
        console.error('Lỗi khi lấy thông tin mặt hàng:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy thông tin mặt hàng.' });
    }
};
const addProductToCart = async (req, res) => {
    try {
        const token = req.body.token;
        const decoded = jwt.verify(token, 'thienquangdeptrainhathemattroi');
        const email = decoded.email;
        const user = await User.findOne({
            where: {
                email: email
            }
        });
        
        if(!user){
            res.status(500).json({ error: 'Đã xảy ra lỗi không tìm thấy user' });
        }
        const user_id = user.id
        const prod_id = req.body.prod_id;
        const quantity = req.body.quantity;

        const status = await StoreService.addProductToCart(prod_id, user_id, quantity);
        
        
        if(!status){
            res.status(500).json({ error: 'Đã xảy ra lỗi thêm thông tin mặt hàng1.' });
        }
        res.status(200).json({ status: 'Thêm mặt hàng vào giỏ thành công' });
        
    } catch (error) {
        console.error('Lỗi khi thêm mặt hàng:', error);
        
        res.status(500).json({ error: 'Đã xảy ra lỗi thêm thông tin mặt hàng2.'});
    }
};
    const getAllCartByUser = async (req, res) => {
        try {
            const token = req.body.token;
            const decoded = jwt.verify(token, 'thienquangdeptrainhathemattroi');
            const email = decoded.email;
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            
            if(!user){
                res.status(500).json({ error: 'Đã xảy ra lỗi không tìm thấy user' });
            }
            const user_id = user.id
            const allproduct = await StoreService.getAllCartByUser(user_id);
           
            res.status(200).json(allproduct);
        } catch (error) {
            console.error('Lỗi khi lấy mặt hàng:', error);
            
            res.status(500).json({ error: 'Đã xảy ra lỗi lấy thông tin mặt hàng2.'});
        }
    };


module.exports = {
    getAllProductAndImg,
    addProductToCart,
    getAllCartByUser,
};