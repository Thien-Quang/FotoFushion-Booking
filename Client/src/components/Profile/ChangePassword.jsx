import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/authProvider';
import { Button } from 'flowbite-react'

const ChangePassword = () => {
    const { auth } = useContext(AuthContext);
    const [editedData, setEditedData] = useState({
        fullName: auth.fullName,
        phone: auth.phone,
        email: auth.email,
        gender: auth.gender,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className='w-full h-auto'>
            <div className='relative'>
                <div className='absolute top-0 w-full '>
                    <div class="py-4 px-6 flex items-center justify-center">
                        <div className='p-4 rounded shadow-sm m-2 w-full text-white'>
                            <div className='flex items-center justify-center'>
                                <label class="block  font-bold mb-2 text-3xl text-white" for="name">
                                    Đổi mật khẩu
                                </label>
                            </div>

                            <div class="mb-4 w-[48%]">
                                <label class="block text-white font-bold mb-2" for="name">
                                    Mật khẩu hiện tại
                                </label>
                                <input
                                    className={`input input-bordered w-full max-w-xs max-sm:text-xs text-black font-semibold leading-tight focus:outline-none focus:shadow-outline`}
                                    id="name"
                                    type="password"
                                    onChange={handleInputChange}
                                    name="password"
                                />
                            </div>
                            <div class="mb-4 w-[48%]">
                                <label class="block text-white font-bold mb-2" for="phoneNumber">
                                    Mật khẩu mới
                                </label>
                                <input
                                    className={`input input-bordered w-full max-w-xs max-sm:text-xs text-black font-semibold leading-tight focus:outline-none focus:shadow-outline`}
                                    id="password"
                                    type="password"
                                    onChange={handleInputChange}
                                    name="password"
                                />
                            </div>
                            <div class="mb-4 max-sm:text-xs">
                                <label class="block text-white font-bold mb-2" for="email">
                                    Nhập lại mật khẩu mới
                                </label>
                                <input
                                    className={`input input-bordered w-full max-w-xs max-sm:text-xs text-black font-semibold leading-tight focus:outline-none focus:shadow-outline`}
                                    id="password"
                                    type="password"
                                    onChange={handleInputChange}
                                    name="password"
                                />
                            </div>
                            <div className='mb-4 w-[320px] flex justify-end'>
                                <Button className='bg-green-400 right-0'>Đổi mật khẩu</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
