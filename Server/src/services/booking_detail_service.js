const BookingDetail = require('../models/booking_detail_models');

class BookingDetailService {
    async getBKDetailbyID(id) {
        try {
            const booking_detail = await BookingDetail.findOne({
                where: { id},
            });
            
            return booking_detail;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin booking detail:', error);
            throw error;
        }
    }
    async getAllBookingDetails() {
        try {
            const booking_detail = await BookingDetail.findAll();
            //console.log("dl bang video",videos)
            
            return booking_detail;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin tất cả booking detail:', error);
            throw error;
        }
    }
    async createBookingDetails(bkdetailData) {
        try {
            const booking_detail = await BookingDetail.create(bkdetailData);
            return booking_detail;
        } catch (error) {
            console.error('Lỗi khi tạo booking detail:', error);
            throw error;
        }
    }

    async updateBookingDetail(id, user_id, photo_album_id, video_album_id, room_id, costume_id, equipment_id,payment_status, event_id, prod_id, price, booking_time ) {
        try {
            const booking_detail = await BookingDetail.findOne({
                where: { id },
            });

            if (!booking_detail) {
                return null;
            }

            await booking_detail.update(
                {
                    user_id,
                    photo_album_id,
                    video_album_id,
                    room_id,
                    costume_id,
                    equipment_id,
                    payment_status,
                    event_id,
                    prod_id,
                    price,
                    booking_time

                },{
                    where:{
                        id
                    }
                }
            );
            return BookingDetail;
        } catch (error) {
            console.error('Lỗi khi cập nhật booking detail:', error);
            throw error;
        }
    }

    async deleteBookingDetail(id) {
        try {
            const booking_detail = await BookingDetail.findOne({
                where: { id },
            });

            if (!booking_detail) {
                return false;
            }

            await booking_detail.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa booking details:', error);
            throw error;
        }
    }
}

module.exports = new BookingDetailService();