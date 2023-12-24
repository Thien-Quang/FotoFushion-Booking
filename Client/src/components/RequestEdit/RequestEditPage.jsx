import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/authProvider';
import { Button } from 'flowbite-react'
import RoomStudio from '../helples/Room'
import MakeUp from '../helples/MakeUp'
import Costumer from '../helples/Costumer'
import Location from '../helples/Location'
import { CreateABookingOnlineAll } from '../../apis/booking'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const RequestEditPage = () => {
    const { auth } = useContext(AuthContext);
    const [selectedFile, setSelectedFile] = useState(null);
    const [message, setMessage] = useState(null);

    const handleBooking = async () => {
    };
    const Booking = () => {
        handleBooking()
    }

    return (
        <>
            <ToastContainer />
            <div className='w-full bg-black'>
                <img src="https://firebasestorage.googleapis.com/v0/b/fotofushion-51865.appspot.com/o/FrojectImage%2Fbgbooking.png?alt=media&token=ab70de9e-1783-4f94-a4bc-bf2c870f0fcf" alt="" />
                <div className='flex justify-center items-center mt-[-26%]'>
                    <div className='w-full p-4'>

                        <div className='p-4 border rounded shadow-sm m-2 bg-white'>
                            <div className='w-full flex items-center justify-center'>
                                <div class="w-full text-2xl py-4 px-6 bg-btnprimary text-white text-center font-bold uppercase border rounded-xl">
                                    THÔNG TIN CHỈNH SỬA
                                </div>
                            </div>

                            <div className='w-full mt-6'>
                                <div className='flex row  items-start justify-evenly '>

                                    <div className='w-[43%] max-sm:w-full max-md:w-full'>
                                        <div class="mb-4">
                                            <label class="block text-gray-700 font-bold mb-2" for="phone">
                                                Chọn ảnh *
                                            </label>
                                            <input
                                                type='file'
                                                className="my-2 border-warning border-2 rounded-lg p-3 w-full max-w-xs"
                                                onChange={(event) => {
                                                    const file = event.target.files[0];
                                                    setSelectedFile(file);
                                                }}
                                            />
                                            {selectedFile &&
                                                <img src={URL?.createObjectURL(selectedFile)} alt="Preview" style={{ maxWidth: '100%', maxHeight: '600px' }} />
                                            }
                                        </div>
                                    </div>

                                    <div class="mb-4 w-[50%]">
                                        <label class="block text-gray-700 font-bold mb-2" for="message">
                                            Mô tả yêu cầu
                                        </label>
                                        <textarea
                                            className="textarea textarea-warning w-full"
                                            id="message" rows="4" placeholder="Nhập yêu cầu hoặc ý tưởng của bạn về yêu cầu chỉnh sửa ảnh..." onChange={(event) => setMessage(event.target.value)} >

                                        </textarea>
                                    </div>

                                </div>
                            </div>

                            <div class="flex items-center justify-center mb-4">
                                <button
                                    className="btn  bg-btnprimary text-white text-center font-bold uppercase border rounded-xl shadow-lg"
                                    type="submit" onClick={() => Booking()}>
                                    Gửi yêu cầu
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>

    );
};

export default RequestEditPage;