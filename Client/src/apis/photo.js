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
//lấy hình ảnh từ bảng photo bắng blog-id

const getListPhotoByBlogId = async ({ blog_id }) => {
    console.log(blog_id);
    try {
        const response = await axiosClient.get(`/getAllPhotosByBlogId/${blog_id}`)

        // Trích xuất dữ liệu từ response và trả về chỉ dữ liệu.
        if (response.data) {
            return response.data;
        }
    } catch (error) {
        console.error('Lỗi khi lấy danh sách ảnh:', error);
        throw error;
    }
};
const getAllPhoto = async ({ accessToken }) => {
    try {
        const responseRoles = await axiosClient.get(`/getAllPhotos`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        },);
        console.log(responseRoles);
        return {
            id: responseRoles.data.id,
            img_name: responseRoles.data.img_name,
            url_photo: responseRoles.data.url_photo,
            albums_id: responseRoles.data.albums_id,

        };
    } catch (error) {
        return {
            error,
            statusCode: error.status,
        };
    }
};

const CreateAPhoto = async (accessToken, img_name, url_photo, costume_id) => {

    try {
        const response = await axiosClient.post('/createPhoto', { img_name: img_name, url_photo: url_photo, costume_id: costume_id }, {
            headers: {

                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (e) {
        return {
            error: e.response.data,
            status: e.response.status,
        };
    }
};
const updateRoomPhoto = async (accessToken, img_name, url_photo, room_id) => {

    try {
        const response = await axiosClient.post('/createPhoto', { img_name: img_name, url_photo: url_photo, room_id: room_id }, {
            headers: {

                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (e) {
        return {
            error: e.response.data,
            status: e.response.status,
        };
    }
};
const updateProductPhoto = async (accessToken, img_name, url_photo, prod_id) => {

    try {
        const response = await axiosClient.post('/createPhoto', { img_name: img_name, url_photo: url_photo, prod_id: prod_id }, {
            headers: {

                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (e) {
        return {
            error: e.response.data,
            status: e.response.status,
        };
    }
};
export {
    getListPhotoByAlbumsId,
    getAllPhoto,
    CreateAPhoto,
    updateRoomPhoto,
    updateProductPhoto,
    getListPhotoByBlogId
};
