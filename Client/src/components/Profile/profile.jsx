import React, { useState } from 'react'
import { icons } from "../../utils/icons";
import Hoso from "./hoso"
import Address from "./address"
import ChangePasswordPage from "./changePassword"
import Order from "./order"


const Profile = () => {

    const [activeTab, setActiveTab] = useState("profile");
    const handleTabClick = (tabName) => {
        setActiveTab(tabName); // Cập nhật trạng thái khi nhấn vào thẻ li
    };

    return (
        <div className='w-full bg-black pt-4'>
            <div className='flex justify-center'>
                <div className='w-3/4 text-white flex items-center justify-center'>
                    <div className='w-1/2 h-20 m-4 bg-white'>
                        <span>Thông tin cá nhân </span>

                    </div>
                    <div className='w-1/2 h-20 m-4 bg-white'>
                        <span>Thông tin cá nhân </span>

                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-3/4 text-white flex items-center justify-center'>
                    <div className='w-1/4 h-auto m-4 bg-white text-black flex items-center justify-center rounded-lg'>
                        <ul className='w-3/4'>
                            <li
                                className={`m-4 cursor-pointer flex items-center border border-yellow-300 p-2 rounded-2xl ${activeTab === "profile" && "bg-yellow-200" // Kiểm tra trạng thái để áp dụng lớp CSS khác nhau
                                    }`}
                                onClick={() => handleTabClick("profile")}
                            >
                                <span className='mx-2'><icons.BiSolidUser /></span>
                                Hồ Sơ
                            </li>
                            <li
                                className={`m-4 cursor-pointer flex items-center border border-yellow-300 p-2 rounded-2xl ${activeTab === "bank" && "bg-yellow-200" // Kiểm tra trạng thái để áp dụng lớp CSS khác nhau
                                    }`}
                                onClick={() => handleTabClick("bank")}
                            >

                                <span className='mx-2'><icons.BiSolidBank /></span>

                                Ngân Hàng

                            </li>
                            <li
                                className={`m-4 cursor-pointer flex items-center border border-yellow-300 p-2 rounded-2xl ${activeTab === "address" && "bg-yellow-200" // Kiểm tra trạng thái để áp dụng lớp CSS khác nhau
                                    }`}
                                onClick={() => handleTabClick("address")}
                            >

                                <span className='mx-2'><icons.FaRegAddressCard /></span>

                                Địa Chỉ

                            </li>
                            <li
                                className={`m-4 cursor-pointer flex items-center border border-yellow-300 p-2 rounded-2xl ${activeTab === "ChangePassword" && "bg-yellow-200" // Kiểm tra trạng thái để áp dụng lớp CSS khác nhau
                                    }`}
                                onClick={() => handleTabClick("ChangePassword")}
                            >

                                <span className='mx-2'><icons.GiSkeletonKey /></span>

                                Đổi Mật Khẩu

                            </li>
                            <li
                                className={`m-4 cursor-pointer flex items-center border border-yellow-300 p-2 rounded-2xl ${activeTab === "myorder" && "bg-yellow-200" // Kiểm tra trạng thái để áp dụng lớp CSS khác nhau
                                    }`}
                                onClick={() => handleTabClick("myorder")}
                            >

                                <span className='mx-2'><icons.RiListUnordered /></span>

                                Đơn Mua

                            </li>
                            <li
                                className={`m-10 cursor-pointer flex items-center border border-yellow-300 p-2 rounded-2xl ${activeTab === "logout" && "bg-yellow-200" // Kiểm tra trạng thái để áp dụng lớp CSS khác nhau
                                    }`}
                                onClick={() => handleTabClick("logout")}
                            >

                                Đăng Xuất

                            </li>
                        </ul>

                    </div>
                    <div className="w-3/4 m-4 bg-white rounded-xl">
                        {activeTab === "address" && <Address />}
                        {activeTab === "profile" && <Hoso />}
                        {activeTab === "bank" && <Hoso />}
                        {activeTab === "myorder" && <Order />}
                        {activeTab === "ChangePassword" && <ChangePasswordPage />}

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Profile
