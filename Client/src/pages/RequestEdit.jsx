import React from 'react';
import RequestEditPage from '../components/RequestEdit/RequestEditPage';
const RequestEdit = () => {
    document.title = "Yêu cầu chỉnh sửa ";
    return (
        <div>
            <RequestEditPage />
        </div>
    )
}

export default RequestEdit;