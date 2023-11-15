import React, { useContext, useEffect, useState } from 'react'
import * as photo from '../../apis/photo'
import * as room from '../../apis/room'
import AuthContext from '../../context/authProvider';
import { Spinner } from '@material-tailwind/react';
import { ToastContainer, toast } from 'react-toastify';


const AddRoomPhoto = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [is_status, setIs_status] = useState(false)


    const [img_name, setimg_name] = useState('')
    const [url_photo, seturl_photo] = useState('')
    const [room_id, setRoom_id] = useState('')
    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);
    const { auth } = useContext(AuthContext);


    const notify = (message, type) => {
        const toastType = type === 'success' ? toast.success : toast.error;
        return toastType(message, {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };
    useEffect(() => {
        const fetchAdd = async () => {
            try {
                const addRoom = await room.CreateARoom(auth.accessToken, name, is_status, category, price);
                console.log('roomid lấy từ đấu' + addRoom.id);
                // Update state asynchronously
                setRoom_id(addRoom.id);
                if (addRoom.statusCode === 201) {
                    notify(addRoom.response.message, 'success');
                    setLoading(false);
                    setSubmit(false);
                } else {
                    notify(addRoom.error.message);
                    setLoading(false);
                    setSubmit(false);
                }
            } catch (error) {
                console.error('Error in fetchAdd:', error);
                setLoading(false);
                setSubmit(false);
            }
        };

        if (submit && auth.accessToken !== undefined) {
            fetchAdd();
        }
    }, [submit, auth.accessToken, name, is_status, category, price,]);

    //Thêm hình ảnh vào bảng hình ảnh

    useEffect(() => {
        if (room_id) {
            console.log(room_id);
            const performAddProduct = async () => {
                try {
                    const addProduct = await photo.updateRoomPhoto(auth.accessToken, img_name, url_photo, room_id);

                    if (addProduct.statusCode === 201) {
                        notify(addProduct.response.message, 'success');
                        setLoading(false);
                        setSubmit(false);
                    } else {
                        notify(addProduct.error.message);
                        setLoading(false);
                        setSubmit(false);
                    }
                } catch (error) {
                    console.error('Error in performAddProduct:', error);
                    setLoading(false);
                    setSubmit(false);
                }
            };

            // Call the function when costumer_id changes
            performAddProduct();
        }
    }, [room_id, auth.accessToken, img_name, url_photo]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        setLoading(true);
    };
    return (
        <>
            <ToastContainer />
            <div className='flex items-center justify-center mt-40'>
                <div className='w-2/3 bg-black h-auto m-4 p-4 flex items-center justify-center'>
                    <span className=' text-white text-2xl'>Thêm một phòng chụp ảnh mới </span>
                </div>
            </div>
            <div className='w-full '>
                <div className='flex items-center justify-center'>
                    <div className='w-[50%] p-8 border border-black rounded-lg shadow-xl'>
                        <form action="" onSubmit={(e) => handleSubmit(e)}>
                            <div className="flex flex-col mb-6">
                                <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                    Nhập tên phòng chụp ảnh
                                </label>
                                <input
                                    id="emailInput"
                                    className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                    required
                                    type="text"
                                    autoComplete=""
                                    placeholder="Tên của phòng chụp hình"
                                    onChange={(event) => setName(event.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className="flex flex-col mb-6">
                                <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                    Nhập loại phòng chụp
                                </label>
                                <input
                                    id="categoryInput"
                                    className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                    required
                                    type="text"
                                    autoComplete=""
                                    placeholder="Loại phòng chụp"
                                    onChange={(event) => { setimg_name(event.target.value); setCategory(event.target.value) }}
                                    value={category}
                                />
                            </div>
                            <div className="flex flex-col mb-6">
                                <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                    Nhập giá của phòng chụp theo giờ
                                </label>
                                <input
                                    id="priceInput"
                                    className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                    required
                                    type="number"
                                    autoComplete=""
                                    placeholder="...............VNĐ"
                                    onChange={(event) => setPrice(event.target.value)}
                                    value={price}
                                />
                            </div>
                            <div className="flex flex-col mb-6">
                                <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                    Nhập url photo
                                </label>
                                <input
                                    id="urlphotoinput"
                                    className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                    required
                                    type="text"
                                    autoComplete=""
                                    placeholder="url_photo"
                                    onChange={(event) => seturl_photo(event.target.value)}
                                    value={url_photo}
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="py-2 px-4 bg-btnprimary text-blue-gray-900 rounded-md w-32 mx-6 hover:bg-light-green-800"
                                >
                                    {loading ? (
                                        <div className="flex items-center justify-center">
                                            <Spinner className="h-6 w-6 mr-4" /> <span>Loading...</span>
                                        </div>
                                    ) : (
                                        <span>Thêm</span>
                                    )}
                                </button>
                            </div>
                        </form>


                    </div>

                </div>
            </div>
        </>
    )
}

export default AddRoomPhoto
