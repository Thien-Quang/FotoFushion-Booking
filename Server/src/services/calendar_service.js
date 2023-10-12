const CaLendar = require('../models/calendar_models');

class CaLendarService {
    async getCaLenderbyID(id) {
        try {
            const caLendar = await CaLendar.findOne({
                where: { id},
            });
            
            return caLendar;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin CaLender:', error);
            throw error;
        }
    }
    async getAllCaLendar() {
        try {
            const caLendar = await CaLendar.findAll();
            //console.log("dl bang video",videos)
            
            return caLendar;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin tất cả CaLendar:', error);
            throw error;
        }
    }
    async createCaLender(caLendarData) {
        try {
            const caLendar = await CaLendar.create(caLendarData);
            return caLendar;
        } catch (error) {
            console.error('Lỗi khi tạo CaLendar:', error);
            throw error;
        }
    }

    async updateEquipment(id, start_date, end_date, is_status, booking_id  ) {
        try {
            const calendar = await CaLendar.findOne({
                where: { id },
            });

            if (!calendar) {
                return null;
            }

            await calendar.update(
                {
                    start_date,
                    end_date,
                    is_status,
                    booking_id

                },{
                    where:{
                        id
                    }
                }
            );
            return calendar;
        } catch (error) {
            console.error('Lỗi khi cập nhật CaLendar:', error);
            throw error;
        }
    }

    async deleteCaLendar(id) {
        try {
            const caLendar = await CaLendar.findOne({
                where: { id },
            });

            if (!caLendar) {
                return false;
            }

            await caLendar.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa CaLendar:', error);
            throw error;
        }
    }
}

module.exports = new CaLendarService();