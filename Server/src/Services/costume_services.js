const Costume = require('../models/costume_models');

class CostumeService {
    async getCostumeById(id) {
        try {
            const costume = await Costume.findByPk(id);
            return costume;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin trang phục:', error);
            throw error;
        }
    }

    async getAllCostumes() {
        try {
            const costumes = await Costume.findAll();
            return costumes;
        } catch (error) {
            console.error('Lỗi khi lấy danh sách trang phục:', error);
            throw error;
        }
    }

    async createCostume(costumeData) {
        try {
            const costume = await Costume.create(costumeData);
            return costume;
        } catch (error) {
            console.error('Lỗi khi tạo trang phục:', error);
            throw error;
        }
    }

    async updateCostume(id, costumeData) {
        try {
            const costume = await Costume.findByPk(id);

            if (!costume) {
                return null;
            }

            await costume.update(costumeData);
            return costume;
        } catch (error) {
            console.error('Lỗi khi cập nhật trang phục:', error);
            throw error;
        }
    }

    async deleteCostume(id) {
        try {
            const costume = await Costume.findByPk(id);

            if (!costume) {
                return false;
            }

            await costume.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa trang phục:', error);
            throw error;
        }
    }
}

module.exports = new CostumeService();
