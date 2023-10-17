const Video = require('../models/video_models');

class VideoService {
    async getVideoByID(id) {
        try {
            const video = await Video.findOne({
                where: { id},
            });
            
            return video;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin video:', error);
            throw error;
        }
    }
    async getAllVideos() {
        try {
            const videos = await Video.findAll();
            //console.log("dl bang video",videos)
            
            return videos;
        } catch (error) {
            console.error('Lỗi khi lấy thông tin tất cả video:', error);
            throw error;
        }
    }
    async createVideo(videoData) {
        try {
            const video = await Video.create(videoData);
            return video;
        } catch (error) {
            console.error('Lỗi khi tạo video:', error);
            throw error;
        }
    }

    async updateVideo(id, albums_id,url_video,name) {
        try {
            const video = await Video.findOne({
                where: { id },
            });

            if (!video) {
                return null;
            }

            await video.update(
                {
                    albums_id,
                    url_video,
                    name  
                },{
                    where:{
                        id: id
                    }
                }
            );
            return video;
        } catch (error) {
            console.error('Lỗi khi cập nhật video:', error);
            throw error;
        }
    }

    async deleteVideo(id) {
        try {
            const video = await Video.findOne({
                where: { id },
            });

            if (!video) {
                return false;
            }

            await video.destroy();
            return true;
        } catch (error) {
            console.error('Lỗi khi xóa video:', error);
            throw error;
        }
    }
}

module.exports = new VideoService();