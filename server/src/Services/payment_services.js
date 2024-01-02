const Request = require('../models/request_models');
const BookingDetail = require('../models/booking_detail_models');
const Order = require('../models/orders_models');
const OrderDetail = require('../models/orders_details_models');
const { v4: uuidv4 } = require('uuid');
const CartItem = require('../models/cart_items_models');
const Cart = require('../models/cart_models');
const StoreService = require('../Services/shop');
const { email } = require('../helper/joi_schema');

class PaymentService {
    async sucessPaymentForRequest(user_id) {
        try {
            Request.update({ is_status: true }, {
                where: {
                    user_id
                },
            })
                .then((result) => {
                    console.log(`Rows updated: ${result[0]}`);
                })
                .catch((error) => {
                    console.error('Error updating rows:', error);
                });
        } catch (error) {
            console.error('Lỗi khi cập nhật chi tiết đặt yêu cầu chỉnh sửa:', error);
            throw error;
        }
    }
    async sucessPaymentForBookingdetails(user_id) {
        try {
            BookingDetail.update(
                { payment_status: 'Đã thanh toán' },
                { where: { user_id } }
            )
                .then((result) => {
                    console.log(`Số dòng được cập nhật: ${result[0]}`);
                })
                .catch((error) => {
                    console.error('Lỗi cập nhật giá trị:', error);
                });
        } catch (error) {
            console.error('Lỗi khi cập nhật chi tiết đặt lịch:', error);
            throw error;
        }
    }
    async sucessPaymentForStore(user_id, amount) {
        try {
            const order_id = uuidv4();
            Order.create({
                id: order_id, // Thay đổi giá trị id theo nhu cầu của bạn
                payment_method: 'VNPAY', // Thay đổi giá trị payment_method theo nhu cầu của bạn
                order_date: new Date(), // Thay đổi giá trị order_date theo nhu cầu của bạn
                total_amount: amount, // Thay đổi giá trị total_amount theo nhu cầu của bạn
                user_id, // Thay đổi giá trị user_id theo nhu cầu của bạn
                shipping_fee: 30000,
            })
                .then((order) => {
                    console.log('Dòng dữ liệu đã được thêm order:', order.toJSON());
                })
                .catch((error) => {
                    console.error('Lỗi khi thêm dòng dữ liệu:', error);
                });
            const cart = await Cart.findOne({
                where: {
                    user_id
                }
            })
            if (!cart) {
                return null;
            }
            const cart_id = cart.dataValues.id;
            console.log(cart_id);
            const cart_items = await CartItem.findAll({
                where: { cart_id }
            });
            cart_items.forEach((cart_item) => {
                OrderDetail.create({
                    id: uuidv4(), // Thay đổi giá trị id theo nhu cầu của bạn
                    order_id: order_id, // Thay đổi giá trị order_id theo nhu cầu của bạn
                    prod_id: cart_item.prod_id,
                    quantity: cart_item.quantity,
                    unit_price: cart_item.price,
                    shipping_fee: 0.0, // Thay đổi giá trị shipping_fee theo nhu cầu của bạn
                    total_price: cart_item.price * cart_item.quantity,
                });
            });
            StoreService.deleteAllProductInCart(user_id);
        } catch (error) {
            console.error('Lỗi khi cập nhật chi tiết order:', error);
            throw error;
        }
    }
    async test() {
        const text = 'Thanh toan hoa don cua hang cho nguoi dung ThienQuang24 voi ma GD: 31161944 Loai GD: fotofushion1 email: ThienQuang24@gmail.com';

        // Sử dụng biểu thức chính quy để lấy đoạn email
        const emailRegex = /email:\s*([^\s]+)/;
        const match = text.match(emailRegex);

        if (match && match[1]) {
            const email = match[1];
            console.log('Địa chỉ email:', email);
        } else {
            console.log('Không tìm thấy địa chỉ email trong văn bản.');
        }
        return email;
    }
};
const a = new PaymentService();
a.test()
//  .then((data) => {
//     console.log(data);
//  })
// a.sucessPaymentForStore("eee3bc05-88d3-408b-9da3-553c854cd1eb", 123123);



module.exports = new PaymentService();