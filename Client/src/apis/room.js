import axiosClient from '../config/axios.config';

const CreateARoom = async (accessToken, name, is_status, category, price) => {

    try {
        const response = await axiosClient.post('/createPhotographyRoom', { name: name, is_status: is_status, category: category, price: price }, {
            headers: {

                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {
            id: response.data.id,
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
    CreateARoom
};