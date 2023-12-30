import React, { useContext, useState } from 'react'
import AuthContext from '../../context/authProvider';
import { Button } from 'flowbite-react'


const HoSoCaNhan = () => {
    const { auth } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);
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

    const handleGenderChange = (e) => {
        setEditedData((prevData) => ({
            ...prevData,
            gender: e.target.value,
        }));
    };

    const handleSave = () => {
        // Thực hiện lưu dữ liệu đã chỉnh sửa tại đây
        // Sau khi lưu xong, cập nhật trạng thái và tắt chế độ chỉnh sửa
        setIsEditing(false);
    };

    const handleCancel = () => {
        // Nếu người dùng hủy bỏ, khôi phục dữ liệu về giá trị ban đầu và tắt chế độ chỉnh sửa
        setEditedData({
            fullName: auth.fullName,
            phone: auth.phone,
            email: auth.email,
            gender: auth.gender,
        });
        setIsEditing(false);
    };

    return (
        <div className='w-full h-auto'>
            <div className='relative'>
                <div className='absolute top-0 w-full flex items-center justify-center'>
                    <div class="py-4 px-6 flex items-center justify-center">
                        <div className='p-4 rounded shadow-sm m-2 w-full text-white border bg-black'>
                            <div className='flex items-center justify-center'>
                                <div className="flex flex-col items-center pb-10">
                                    <div className="avatar">
                                        <div className="w-28 rounded-full">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <h5 className="mb-1 text-xl font-medium text-white">{auth.fullName}</h5>
                                    <span className="text-sm text-white">{auth.phone}</span>
                                </div>
                            </div>



                            <div class="mb-4 max-sm:text-xs">
                                <label class="block text-white font-bold mb-2" for="email">
                                    Email
                                </label>
                                <input
                                    className={`input input-bordered ${isEditing ? 'input-warning' : ''} w-full max-w-xs max-sm:text-xs text-black font-semibold leading-tight focus:outline-none focus:shadow-outline`}
                                    id="email"
                                    type="email"
                                    value={isEditing ? editedData.email : auth.email}
                                    readOnly={!isEditing}
                                    onChange={handleInputChange}
                                    name="email"
                                />
                            </div>
                            <div class="mb-4 max-sm:text-xs">
                                <label class="block text-white font-bold mb-2" for="gender">
                                    Giới Tính
                                </label>
                                {isEditing ? (
                                    <select
                                        className={`input input-bordered input-warning w-full max-w-xs max-sm:text-xs text-black font-semibold leading-tight focus:outline-none focus:shadow-outline`}
                                        id="gender"
                                        onChange={handleGenderChange}
                                        value={editedData.gender}
                                        name="gender"
                                    >
                                        <option value="Nam">Nam</option>
                                        <option value="Nữ">Nữ</option>
                                    </select>
                                ) : (
                                    <input
                                        className={`input input-bordered ${isEditing ? 'input-warning' : ''} w-full max-w-xs max-sm:text-xs text-black font-semibold leading-tight focus:outline-none focus:shadow-outline`}
                                        id="gender"
                                        type="text"
                                        value={auth.gender === null ? "Chưa có thông tin" : auth.gender}
                                        readOnly
                                    />
                                )}
                            </div>

                            <div className='ml-[15%]'>
                                {isEditing ? (
                                    <div className='flex items-start justify-start'>
                                        <Button className='bg-green-400 m-2' onClick={handleSave}>
                                            Lưu
                                        </Button>
                                        <Button className='bg-red-400 m-2' onClick={handleCancel}>
                                            Hủy
                                        </Button>
                                    </div>
                                ) : (
                                    <Button className='bg-green-400 right-0' onClick={() => { setIsEditing(true) }}>Chỉnh sửa</Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HoSoCaNhan
