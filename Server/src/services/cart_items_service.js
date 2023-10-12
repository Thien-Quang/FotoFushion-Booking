const CartItem = require('../models/cart_items_models');

class CartItemService {
    async getCarItemtbyID(id) {
        try {
            const carti = await CartItem .findOne({
                where: { id},
            });
            
            return carti ;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin CartItem :', error);
            throw error;
        }
    }
    async getAllCartItem() {
        try {
            const carti = await CartItem .findAll();
            //console.log("dl bang video",videos)
            
            return carti;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin tất cả CartItem :', error);
            throw error;
        }
    }
    async createCartItem(cartiData) {
        try {
            const carti = await CartItem .create(cartiData);
            return carti;
        } catch (error) {
            console.error('Lỗi khi tạo CartItem :', error);
            throw error;
        }
    }

    async updateCartItem(id, cart_id, prod_id, quantity, price  ) {
        try {
            const carti = await CartItem .findOne({
                where: { id },
            });

            if (!carti) {
                return null;
            }

            await carti.update(
                {
                    cart_id,
                    prod_id,
                    quantity, 
                    price

                },{
                    where:{
                        id
                    }
                }
            );
            return carti;
        } catch (error) {
            console.error('Lỗi khi cập nhật CartItem :', error);
            throw error;
        }
    }

    async deleteCartItem(id) {
        try {
            const carti = await CartItem .findOne({
                where: { id },
            });

            if (!carti) {
                return false;
            }

            await carti.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa CartItem :', error);
            throw error;
        }
    }
}

module.exports = new CartItemService();