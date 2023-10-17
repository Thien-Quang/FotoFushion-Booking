const Comment = require('../models/comment_models');

class CommentService {
    async getCommentID(id) {
        try {
            const comment = await Comment.findOne({
                where: { id},
            });
            
            return comment ;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin Comment:', error);
            throw error;
        }
    }
    async getAllComment() {
        try {
            const comment = await Comment.findAll();
            //console.log("dl bang video",videos)
            
            return comment;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin tất cả Comment:', error);
            throw error;
        }
    }
    async createComment(commentData) {
        try {
            const comment = await Comment.create(commentData);
            return comment;
        } catch (error) {
            console.error('Lỗi khi tạo Comment:', error);
            throw error;
        }
    }

    async updateComment(id, user_id, phoab_id, vidab_id, prod_id, content  ) {
        try {
            const comment = await Comment.findOne({
                where: { id },
            });

            if (!comment) {
                return null;
            }

            await comment.update(
                {
                    user_id,
                    phoab_id,
                    vidab_id,
                    prod_id,
                    content

                },{
                    where:{
                        id
                    }
                }
            );
            return comment;
        } catch (error) {
            console.error('Lỗi khi cập nhật Comment:', error);
            throw error;
        }
    }

    async deleteComment(id) {
        try {
            const comment = await Comment.findOne({
                where: { id },
            });

            if (!comment) {
                return false;
            }

            await comment.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa Comment:', error);
            throw error;
        }
    }
}

module.exports = new CommentService();