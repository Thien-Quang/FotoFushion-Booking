const BookingDetail = require('../models/booking_detail_models');

class BookingDetailService {
    async getBookingDetailById(id) {
        try {
            const bookingDetail = await BookingDetail.findByPk(id);
            return bookingDetail;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin chi tiết đặt lịch:', error);
            throw error;
        }
    }

    async getAllBookingDetails() {
        try {
            const bookingDetails = await BookingDetail.findAll();
            return bookingDetails;
        } catch (error) {
            console.error('Lỗi khi lấy danh sách chi tiết đặt lịch:', error);
            throw error;
        }
    }

    async createBookingDetail(bookingDetailData) {
        try {
            const bookingDetail = await BookingDetail.create(bookingDetailData);
            return bookingDetail;
        } catch (error) {
            console.error('Lỗi khi tạo chi tiết đặt lịch:', error);
            throw error;
        }
    }

    async updateBookingDetail(id, bookingDetailData) {
        try {
            const bookingDetail = await BookingDetail.findByPk(id);

            if (!bookingDetail) {
                return null;
            }

            await bookingDetail.update(bookingDetailData);
            return bookingDetail;
        } catch (error) {
            console.error('Lỗi khi cập nhật chi tiết đặt lịch:', error);
            throw error;
        }
    }

    async deleteBookingDetail(id) {
        try {
            const bookingDetail = await BookingDetail.findByPk(id);

            if (!bookingDetail) {
                return false;
            }

            await bookingDetail.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa chi tiết đặt lịch:', error);
            throw error;
        }
    }
}

module.exports = new BookingDetailService();
