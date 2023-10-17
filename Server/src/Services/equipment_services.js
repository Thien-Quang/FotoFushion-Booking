const Equipment = require('../models/equipment_models');

class EquipmentService {
    async getEquipmentById(id) {
        try {
            const equipment = await Equipment.findByPk(id);
            return equipment;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin thiết bị:', error);
            throw error;
        }
    }

    async getAllEquipment() {
        try {
            const equipmentList = await Equipment.findAll();
            return equipmentList;
        } catch (error) {
            console.error('Lỗi khi lấy danh sách thiết bị:', error);
            throw error;
        }
    }

    async createEquipment(equipmentData) {
        try {
            const equipment = await Equipment.create(equipmentData);
            return equipment;
        } catch (error) {
            console.error('Lỗi khi tạo thiết bị:', error);
            throw error;
        }
    }

    async updateEquipment(id, equipmentData) {
        try {
            const equipment = await Equipment.findByPk(id);

            if (!equipment) {
                return null;
            }

            await equipment.update(equipmentData);
            return equipment;
        } catch (error) {
            console.error('Lỗi khi cập nhật thiết bị:', error);
            throw error;
        }
    }

    async deleteEquipment(id) {
        try {
            const equipment = await Equipment.findByPk(id);

            if (!equipment) {
                return false;
            }

            await equipment.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa thiết bị:', error);
            throw error;
        }
    }
}

module.exports = new EquipmentService();
