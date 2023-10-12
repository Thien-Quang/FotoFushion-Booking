const Equipment = require('../models/equipment_models');

class EquipmentService {
    async getEquipmentbyID(id) {
        try {
            const equipment = await Equipment.findOne({
                where: { id},
            });
            
            return equipment;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin equipment:', error);
            throw error;
        }
    }
    async getAllEquipment() {
        try {
            const equipment = await Equipment.findAll();
            //console.log("dl bang video",videos)
            
            return equipment;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin tất cả equipment:', error);
            throw error;
        }
    }
    async createEquipment(equipmentData) {
        try {
            const equipment = await Equipment.create(equipmentData);
            return equipment;
        } catch (error) {
            console.error('Lỗi khi tạo equipment:', error);
            throw error;
        }
    }

    async updateEquipment(id, name, category, price, quantity ) {
        try {
            const equipment = await Equipment.findOne({
                where: { id },
            });

            if (!equipment) {
                return null;
            }

            await equipment.update(
                {
                    name,
                    category,
                    price,
                    quantity

                },{
                    where:{
                        id
                    }
                }
            );
            return equipment;
        } catch (error) {
            console.error('Lỗi khi cập nhật equipment:', error);
            throw error;
        }
    }

    async deleteEquipment(id) {
        try {
            const equipment = await Equipment.findOne({
                where: { id },
            });

            if (!equipment) {
                return false;
            }

            await equipment.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa equipment:', error);
            throw error;
        }
    }
}

module.exports = new EquipmentService();