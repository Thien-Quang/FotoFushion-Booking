const Account = require('../models/account_models');
const User = require('../models/users_models');


class UserService {
    async getUserById(id) {
        try {
            const user = await User.findByPk(id);
            return user;
        } catch (error) {
            console.error('Lỗi khi lấy bài viết:', error);
            throw error;
        }
    }
    async getUserByEmail(email) {
        try {
            const user = await User.findOne({
                where: { email: email }
            });
            return user;
        } catch (error) {
            console.error('Lỗi khi lấy bài viết:', error);
            throw error;
        }
    }

    async getAllUsers() {
        try {
            const users = await User.findAll({
                include: [
                    {
                        model: Account, // Thay Role bằng tên mô hình của bạn
                        as: 'account', // Tùy chọn, chỉ định tên alias (nếu có)
                    },
                ],
            });
            return users;
        } catch (error) {
            console.error('Lỗi khi lấy danh sách bài viết:', error);
            throw error;
        }
    }

    async createUser(userData) {
        try {
            const user = await User.create(userData);
            return user;
        } catch (error) {
            console.error('Lỗi khi tạo bài viết:', error);
            throw error;
        }
    }

    async updateUser(id, userData) {
        try {
            const user = await User.findByPk(id);

            if (!user) {
                return null;
            }

            await user.update(userData);
            return user;
        } catch (error) {
            console.error('Lỗi khi cập nhật bài viết:', error);
            throw error;
        }
    }


    async deleteUser(id) {
        try {
            const user = await User.findByPk(id);

            if (!user) {
                return false;
            }

            await user.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa bài viết:', error);
            throw error;
        }
    }
    async deleteUserbyEmail(email) {
        try {
            const user = await User.findOne({
                where: { email: email }
            });

            if (!user) {
                return false;
            }

            await user.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa người dùng :', error);
            throw error;
        }
    }
}

module.exports = new UserService();