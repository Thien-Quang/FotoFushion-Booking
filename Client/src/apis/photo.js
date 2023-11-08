import axiosClient from '../config/axios.config';

const getListPhotoByAlbumsId = async ({ albumsid }) => {
    try {
        const response = await axiosClient.get(`/getAllPhotosByAlbumsId/${albumsid}`)

        // Trích xuất dữ liệu từ response và trả về chỉ dữ liệu.
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.error('Lỗi khi lấy danh sách ảnh:', error);
        throw error;
    }
};

export {
    getListPhotoByAlbumsId
};
