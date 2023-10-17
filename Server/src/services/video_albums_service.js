const VideoAlbum = require('../models/video_albums_models');

class VideoAlbumService {
    async getVideoAlbumByID(id) {
        try {
            const videoAlbum = await VideoAlbum.findOne({
                where: { id},
            });
            
            return videoAlbum;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin video:', error);
            throw error;
        }
    }
    async getAllVideoAlbums() {
        try {
            const videoAlbums = await VideoAlbum.findAll();
            //console.log("dl bang video",videos)
            
            return videoAlbums;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin tất cả video album:', error);
            throw error;
        }
    }
    async createVideoAlbum(albumData) {
        try {
            const videoAlbum = await VideoAlbum.create(albumData);
            return videoAlbum;
        } catch (error) {
            console.error('Lỗi khi tạo video album:', error);
            throw error;
        }
    }

    async updateVideoAlbum(id,name, cover_photo,sum_photo, category, location, price, date_create, user_id ) {
        try {
            const videoAlbum = await Video.findOne({
                where: { id },
            });

            if (!videoAlbum) {
                return null;
            }

            await videoAlbum.update(
                {
                    name:name,
                    cover_photo,
                    sum_photo,
                    category,
                    location,
                    price,
                    date_create,
                    user_id
                },{
                    where:{
                        id
                    }
                }
            );
            return videoAlbum;
        } catch (error) {
            console.error('Lỗi khi cập nhật video album:', error);
            throw error;
        }
    }

    async deleteVideoAlbum(id) {
        try {
            const videoAlbum = await VideoAlbum.findOne({
                where: { id },
            });

            if (!videoAlbum) {
                return false;
            }

            await videoAlbum.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa video album:', error);
            throw error;
        }
    }
}

module.exports = new VideoAlbumService();