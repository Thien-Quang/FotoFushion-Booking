import axiosClient from '../config/axios.config';

const CreateABlogPost = async (accessToken, title, content, author, date) => {

    try {
        const response = await axiosClient.post('/createNewBlogPost',
            {
                title: title,
                content: content,
                author: author,
                date: date

            }, {
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
const getAllBlogPost = async () => {
    try {
        const response = await axiosClient.get(`/getAllBlogPosts`);
        //console.log(response);
        return response.data;
    } catch (error) {
        return {
            error,
            statusCode: error.status,
        };
    }
};
export {
    CreateABlogPost,
    getAllBlogPost
};