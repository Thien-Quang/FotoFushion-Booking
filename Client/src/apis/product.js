import axiosClient from '../config/axios.config';

const addAProduct = async (accessToken, name, description, category, price, discounted_price) => {

    try {
        const response = await axiosClient.post('/createProduct', { name: name, description: description, category: category, price: price, discounted_price: discounted_price }, {
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
    addAProduct
};