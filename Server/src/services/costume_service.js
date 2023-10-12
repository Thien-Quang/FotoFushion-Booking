const Costume = require('../models/costume_models');

class CostumeService {
    async getCostumeByID(id) {
        try {
            const costume = await Costume.findOne({
                where: { id},
            });
            
            return costume; 
        } catch (error) {
            console.error('Lỗi khi lấy thông tin costume:', error);
            throw error;
        }
    }
    async getAllCostumes() {
        try {
            const costumes = await Costume.findAll();
           
            
            return costumes;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin tất cả costume:', error);
            throw error;
        }
    }
    async createCostume(costumeData) {
        try {
            const costume = await Costume.create(costumeData);
            return costume;
        } catch (error) {
            console.error('Lỗi khi tạo costume:', error);
            throw error;
        }
    }

    async updateCostum(id,name, category, price,quantity ) {
        try {
            const costume = await Costume.findOne({
                where: { id },
            });

            if (!costume) {
                return null;
            }

            await costume.update(
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
            return costume;
        } catch (error) {
            console.error('Lỗi khi cập nhật costume:', error);
            throw error;
        }
    }

    async deleteCostume(id) {
        try {
            const costume = await Costume.findOne({
                where: { id },
            });

            if (!costume) {
                return false;
            }

            await costume.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa Costume:', error);
            throw error;
        }
    }
}

module.exports = new CostumeService();