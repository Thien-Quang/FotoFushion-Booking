const Product = require('../models/product_models');
const Photos = require('../models/photo_models');
const Cart = require('../models/cart_models');
const CartItem = require('../models/cart_items_models');
const { v4: uuidv4 } = require('uuid');
const User = require('../models/users_models');

Product.hasMany(Photos, { foreignKey: 'prod_id', as: 'photos' });
Photos.belongsTo(Product, { foreignKey: 'prod_id' });

Product.hasMany(CartItem, { foreignKey: 'prod_id' });
CartItem.belongsTo(Product, { foreignKey: 'prod_id' });
class StoreService {
    async  getProductsAndPhotos() {
        try {
          const productsWithPhotos = await Product.findAll({
            include: [
              {
                model: Photos,
                as: 'photos',
                attributes: ['id', 'img_name', 'url_photo'],
              },
            ],
          });
        return productsWithPhotos;
      
        // return JSON.stringify(productsWithPhotos, null, 2);
        } catch (error) {
          console.error('Lỗi:', error);
        } 
    }

    async addProductToCart( prod_id, user_id, quantity ){
        const cart = await Cart.findOne({
            where: {
                user_id
            }
        })
        if(!cart){
            return null ;
        }
        const cart_id = cart.dataValues.id;
        const prod = await Product.findOne({
            where: {
                id : prod_id
            }
        })
        if(!prod){
            return null ;
        }
        const price =  prod.dataValues.discounted_price;
        const id = uuidv4();

        try {
            const cartItem = await CartItem.create({
                id,
                cart_id,
                prod_id,
                quantity,
                price
            });
        return cart;
        } catch (error) {
            console.error('Lỗi khi thêm mặt hàng vào giỏ hàng:', error);
            throw error;
        }
        
    }
    async getAllCartByUser(user_id){
        try {
            const cart = await Cart.findOne({
                attributes: ['id'], // Chọn thuộc tính bạn muốn lấy (trong trường hợp này là 'id')
                where: {
                user_id // Thay thế 'your_user_id' bằng giá trị user_id cụ thể
                },
            });
            const cart_id = cart.dataValues.id;
            console.log(cart_id);
            const cartItem = await CartItem.findAll({
                        attributes: ['id'],
                        where: { cart_id }, // Thay thế 'your_cart_id' bằng giá trị cart_id cụ thể
                        include: [
                        {
                            model: Product,
                            include: [
                            {
                                model: Photos,
                                as: 'photos',
                                attributes: ['id', 'img_name', 'url_photo'],
                            },
                            ],
                        },
                        ],
                    });
            return cartItem;
        
        } catch (error) {
                console.error('Lỗi:', error);
        }
        
    }
    async getProductDetails(prod_id){
        try {
            const productsWithPhotos = await Product.findOne({
                where: {id : prod_id},
                include: [
                {
                  model: Photos,
                  as: 'photos',
                  attributes: ['id', 'img_name', 'url_photo'],
                },
              ],
            });
          return productsWithPhotos;
        
          // return JSON.stringify(productsWithPhotos, null, 2);
          } catch (error) {
            console.error('Lỗi:', error);
          } 
    }
    async deleteProductInCart(user_id, prod_id){
        try {
            const cart = await Cart.findOne({
                where: {
                    user_id
                }
            })
            if(!cart){
                return null ;
            }
            const cart_id = cart.dataValues.id;
            CartItem.destroy({
                where: {
                  cart_id,
                  prod_id
                }
            })
                .then(() => {
                  console.log(`Mặt hàng với id ${cart_id} và ${prod_id}   đã được xoá thành công.`);
                })
                .catch((error) => {
                  console.error('Lỗi khi xoá mặt hàng:', error);
                });
        
          // return JSON.stringify(productsWithPhotos, null, 2);
          } catch (error) {
            console.error('Lỗi:', error);
          } 
    }
    async deleteAllProductInCart(user_id){
        try {
            const cart = await Cart.findOne({
                where: {
                    user_id
                }
            })
            if(!cart){
                return null ;
            }
            const cart_id = cart.dataValues.id;
            CartItem.destroy({
                where: {
                  cart_id
                }
            })
                .then(() => {
                  console.log(`Mặt hàng với id ${cart_id}  đã được xoá thành công.`);
                })
                .catch((error) => {
                  console.error('Lỗi khi xoá mặt hàng:', error);
                });
        
          // return JSON.stringify(productsWithPhotos, null, 2);
          } catch (error) {
            console.error('Lỗi:', error);
          } 
    }
    

}
// const a = new StoreService();
// a.deleteAllProductInCart("eee3bc05-88d3-408b-9da3-553c854cd1eb");
// a.deleteProductInCart("U1","1");
// .then((data) => {
//     console.log(data);
// })
// a.find("ThienQuang24@gmail.com")
// // a.addProductToCart("1","U1","2")
// .then((data) => {
//     console.log(data);
// })
// a.getProductsAndPhotos()
// .then((data) => {
//     console.log(data);
// })

// console.log();
// const test = require('./photo_services')
// test.getAllPhotos()
// .then((data) => {
//     console.log(data);
// })
module.exports = new StoreService();