const PhotographyRoom = require('../models/calendar_models');

class PhotographyRoomService {
    async getPhotographyRoombyID(id) {
        try {
            const photographyRoom = await PhotographyRoom.findOne({
                where: { id},
            });
            
            return photographyRoom;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin photography room:', error);
            throw error;
        }
    }
    async getAllPhotographyRoom() {
        try {
            const photographyRoom = await PhotographyRoom.findAll();
            //console.log("dl bang video",videos)
            
            return photographyRoom;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin tất cả PhotographyRoom:', error);
            throw error;
        }
    }
    async createEquipment(photographyRoomData) {
        try {
            const photographyRoom = await PhotographyRoom.create(photographyRoomData);
            return photographyRoom;
        } catch (error) {
            console.error('Lỗi khi tạo PhotographyRoom:', error);
            throw error;
        }
    }

    async updateEquipment(id, name, is_status, category, price) {
        try {
            const photography = await PhotographyRoom.findOne({
                where: { id },
            });

            if (!photography) {
                return null;
            }

            await photography.update(
                {
                    name,
                    is_status,
                    category,
                    price

                },{
                    where:{
                        id
                    }
                }
            );
            return photography;
        } catch (error) {
            console.error('Lỗi khi cập nhật PhotographyRoom:', error);
            throw error;
        }
    }

    async deletePhotographyRoom(id) {
        try {
            const photography_room = await PhotographyRoom.findOne({
                where: { id },
            });

            if (!photography_room) {
                return false;
            }

            await photography_room.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa equipment:', error);
            throw error;
        }
    }
}

module.exports = new PhotographyRoomService();