const HistoryPayment = require('../models/history_payment_models');

class HistoryPaymentService {
    async getHistoryPaymentbyID(id) {
        try {
            const history_payment = await HistoryPayment.findOne({
                where: { id},
            });
            
            return history_payment;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin HistoryPayment:', error);
            throw error;
        }
    }
    async getAllHistoryPayment() {
        try {
            const history_payment = await HistoryPayment.findAll();
            //console.log("dl bang video",videos)
            
            return history_payment;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin tất cả HistoryPayment:', error);
            throw error;
        }
    }
    async createHistoryPayment(historyPaymentData) {
        try {
            const history_payment = await HistoryPayment.create(historyPaymentData);
            return history_payment;
        } catch (error) {
            console.error('Lỗi khi tạo HistoryPayment:', error);
            throw error;
        }
    }

    async updateHistoryPayment(id, name, user_id, order_id, booking_id, payment_amount, date_create ) {
        try {
            const history_payment = await HistoryPayment.findOne({
                where: { id },
            });

            if (!history_payment) {
                return null;
            }

            await history_payment.update(
                {
                    name,
                    user_id,
                    order_id,
                    booking_id,
                    payment_amount,
                    date_create


                },{
                    where:{
                        id
                    }
                }
            );
            return history_payment;
        } catch (error) {
            console.error('Lỗi khi cập nhật HistoryPayment:', error);
            throw error;
        }
    }

    async deleteHistoryPayment(id) {
        try {
            const history_payment = await HistoryPayment.findOne({
                where: { id },
            });

            if (!history_payment) {
                return false;
            }

            await HistoryPayment.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa HistoryPayment:', error);
            throw error;
        }
    }
}

module.exports = new HistoryPaymentService();