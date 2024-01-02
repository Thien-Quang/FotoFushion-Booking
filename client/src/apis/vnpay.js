import axiosClient from '../config/axios.config';

export const creatPayment = async (amount, email, payment_type) => {
    console.log(amount);
    console.log(email);
    console.log(payment_type);

    try {
        const response = await axiosClient.post('/creatPayment', {
            amount: amount,
            email: email,
            payment_type: "3",
            bankCode: ''
        });

        console.log(response);

        // Xử lý phản hồi thành công ở đây
        const redirectUrl = response.data.redirectUrl; // Assuming the redirectUrl is part of the response data
        console.log("Redirecting to:", redirectUrl);

        // Use window.location.replace for a more straightforward redirect
        window.location.replace(redirectUrl);

        // If you still want to use a pop-up window, you can use window.open
        // window.open(redirectUrl, '_blank');

    } catch (error) {
        console.error('Error:', error);

        // Handle the error if needed
        return {
            error,
            statusCode: error.status,
        };
    }

};