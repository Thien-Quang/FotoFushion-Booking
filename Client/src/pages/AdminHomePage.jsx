import React from 'react'
import AdminHomeContainer from '../components/AdminContainer/AdminContainer';

const AdminHomePage = () => {
    document.title = "Admin";
    return (
        <div>
            <AdminHomeContainer />
        </div>
    )
}

export default AdminHomePage
