const PhotographyRoom = require('../models/photography_room_models');

class PhotographyRoomService {
    async getPhotographyRoomById(id) {
        try {
            const room = await PhotographyRoom.findByPk(id);
            return room;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin phòng chụp ảnh:', error);
            throw error;
        }
    }

    async getAllPhotographyRooms() {
        try {
            const rooms = await PhotographyRoom.findAll();
            return rooms;
        } catch (error) {
            console.error('Lỗi khi lấy danh sách phòng chụp ảnh:', error);
            throw error;
        }
    }

    async createPhotographyRoom(roomData) {
        try {
            const room = await PhotographyRoom.create(roomData);
            return room;
        } catch (error) {
            console.error('Lỗi khi tạo phòng chụp ảnh:', error);
            throw error;
        }
    }

    async updatePhotographyRoom(id, roomData) {
        try {
            const room = await PhotographyRoom.findByPk(id);

            if (!room) {
                return null;
            }

            await room.update(roomData);
            return room;
        } catch (error) {
            console.error('Lỗi khi cập nhật phòng chụp ảnh:', error);
            throw error;
        }
    }

    async deletePhotographyRoom(id) {
        try {
            const room = await PhotographyRoom.findByPk(id);

            if (!room) {
                return false;
            }

            await room.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa phòng chụp ảnh:', error);
            throw error;
        }
    }
}

module.exports = new PhotographyRoomService();
