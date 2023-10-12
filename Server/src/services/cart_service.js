const Cart = require('../models/cart_models');

class CartService {
    async getCartbyID(id) {
        try {
            const cart = await Cart.findOne({
                where: { id},
            });
            
            return cart ;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin Cart:', error);
            throw error;
        }
    }
    async getAllCart() {
        try {
            const cart = await Cart.findAll();
            //console.log("dl bang video",videos)
            
            return cart;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin tất cả Cart:', error);
            throw error;
        }
    }
    async createCart(cartData) {
        try {
            const cart = await Cart.create(cartData);
            return cart;
        } catch (error) {
            console.error('Lỗi khi tạo Cart:', error);
            throw error;
        }
    }

    async updateCart(id, user_id, total_quantity, total_price  ) {
        try {
            const cart = await Cart.findOne({
                where: { id },
            });

            if (!cart) {
                return null;
            }

            await cart.update(
                {
                    user_id,
                    total_quantity,
                    total_price

                },{
                    where:{
                        id
                    }
                }
            );
            return cart;
        } catch (error) {
            console.error('Lỗi khi cập nhật Cart:', error);
            throw error;
        }
    }

    async deleteCart(id) {
        try {
            const cart = await Cart.findOne({
                where: { id },
            });

            if (!cart) {
                return false;
            }

            await cart.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa Cart:', error);
            throw error;
        }
    }
}

module.exports = new CartService();