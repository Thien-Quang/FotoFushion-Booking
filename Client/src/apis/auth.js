import axiosClient from '../config/axios.config';


const LOGIN_ENDPOINT = '/auth/login';

export const loginApi = async (email, password) => {
    try {
        const response = await axiosClient.post(LOGIN_ENDPOINT, { email: email, password: password });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error,
            statusCode: error.status,
        };
    }
};


export const authorization = async (accessToken, email) => {
    try {
        const responseRoles = await axiosClient.get(`/getAccountByEmail/${email}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        },);
        //console.log(responseRoles);
        return {
            roles: responseRoles.data.role_id,
            phoneNumber: responseRoles.data.phone_number,
            statusCode: responseRoles.status,
        };
    } catch (error) {
        return {
            error,
            statusCode: error.status,
        };
    }
};
export const getUser = async (accessToken, email) => {
    try {
        const responseRoles = await axiosClient.get(`/getUserByEmail/${email}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        },);
        console.log(responseRoles);
        return {
            name: responseRoles.data.name,
            id: responseRoles.data.id,
            address: responseRoles.data.address,
            gender: responseRoles.data.gender,
            voucher_id: responseRoles.data.voucher_id,
            statusCode: responseRoles.status,
        };
    } catch (error) {
        return {
            error,
            statusCode: error.status,
        };
    }
};
const REGISTER_ENDPOINT = 'auth/register';
export const register = async (email, password, phoneNumber) => {
    try {
        const response = await axiosClient.post(REGISTER_ENDPOINT, {
            email: email,
            password: password,
            phone_number: phoneNumber
        });
        return {
            response: response.data,
            statusCode: response.status,
        };
    } catch (error) {
        return {
            error,
            statusCode: error.status,
        };
    }
};



