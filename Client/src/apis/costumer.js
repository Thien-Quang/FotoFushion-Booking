import axiosClient from '../config/axios.config';

const CreateACostumer = async (accessToken, name, category, price, quantity, rental_start_date) => {

    try {
        const response = await axiosClient.post('/createNewCostume', { name: name, category: category, price: price, quantity: quantity, rental_start_date: rental_start_date }, {
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
    CreateACostumer
};