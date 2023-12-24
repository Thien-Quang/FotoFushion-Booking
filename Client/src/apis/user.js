import axiosClient from '../config/axios.config';

const getAllUser = async (accessToken) => {
    try {
        const response = await axiosClient.get(`/getAllUsers`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        console.log(response);
        return response.data
    } catch (error) {
        return {
            error,
            statusCode: error.status,
        };
    }
};
// const updateRoleAccount = async (accessToken, email, role_id) => {

//     try {
//         const response = await axiosClient.put(`/updateAccountByEmail/${email}`, { role_id: role_id }, {
//             headers: {

//                 Authorization: `Bearer ${accessToken}`,
//             },
//         });
//         return {
//             id: response.data.id,
//             response: response.data,
//             statusCode: response.status,
//         };
//     } catch (e) {
//         return {
//             error: e.response.data,
//             status: e.response.status,
//         };
//     }
// };
const deleteUserByEmail = async (accessToken, email) => {
    try {
        const response = await axiosClient.delete(`/deleteUserByEmail/${email}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        });
        return {
            statusCode: response.status
        }
    } catch (error) {
        console.error('Lỗi khi xóa tài khoản :', error);
        throw error;
    }
};
export {
    getAllUser,
    deleteUserByEmail
};