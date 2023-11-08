import axiosClient from '../config/axios.config';


const getAlbumsPhoto = async () => {
    try {
        const response = await axiosClient.get(`/getAllPhotoAlbums`)
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.error('Lỗi khi lấy danh sách ảnh:', error);
        throw error;
    }
};

export {
    getAlbumsPhoto
}