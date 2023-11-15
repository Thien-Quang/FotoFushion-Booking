import React, { useContext, useEffect, useState } from 'react'
import * as photo from '../../apis/photo'
import * as costumer from '../../apis/costumer'
import AuthContext from '../../context/authProvider';
import { Spinner } from '@material-tailwind/react';
import { ToastContainer, toast } from 'react-toastify';


const AddCostumer = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [rental_start_date, setRental_start_date] = useState('')
    const [img_name, setimg_name] = useState('')
    const [url_photo, seturl_photo] = useState('')
    const [costumer_id, setcostumer_id] = useState('')
    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);
    const { auth, setAuth } = useContext(AuthContext);


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
                const addCustumer = await costumer.CreateACostumer(auth.accessToken, name, category, price, quantity, rental_start_date);
                console.log('costomerid lấy từ đấu' + addCustumer.id);
                // Update state asynchronously
                setcostumer_id(addCustumer.id);
                if (addCustumer.statusCode === 201) {
                    notify(addCustumer.response.message, 'success');
                    setLoading(false);
                    setSubmit(false);
                } else {
                    notify(addCustumer.error.message);
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
    }, [submit, auth.accessToken, name, category, price, quantity, rental_start_date]);

    // Use another useEffect to perform actions when costumer_id changes
    useEffect(() => {
        // Check if costumer_id has a valid value
        if (costumer_id) {
            console.log(costumer_id);
            const performAddProduct = async () => {
                try {
                    const addProduct = await photo.CreateAPhoto(auth.accessToken, img_name, url_photo, costumer_id);

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
    }, [costumer_id, auth.accessToken, img_name, url_photo]);


    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmit(true);
        setLoading(true);
    };
    return (
        <>

            <ToastContainer />
            <div className='w-full mt-40'>
                <div className='flex items-center justify-center'>
                    <div className='w-[60%] border border-black'>
                        <form action="" onSubmit={(e) => handleSubmit(e)}>
                            <div className="flex flex-col mb-6">
                                <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                    tên hình ảnh
                                </label>
                                <input
                                    id="emailInput"
                                    className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                    required
                                    type="text"
                                    autoComplete=""
                                    placeholder="nhập tên"
                                    onChange={(event) => setName(event.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className="flex flex-col mb-6">
                                <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                    Category
                                </label>
                                <input
                                    id="categoryInput"
                                    className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                    required
                                    type="text"
                                    autoComplete=""
                                    placeholder="nhập loại"
                                    onChange={(event) => { setimg_name(event.target.value); setCategory(event.target.value) }}
                                    value={category}
                                />
                            </div>
                            <div className="flex flex-col mb-6">
                                <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                    Giá
                                </label>
                                <input
                                    id="priceInput"
                                    className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                    required
                                    type="text"
                                    autoComplete=""
                                    placeholder="nhập giá"
                                    onChange={(event) => setPrice(event.target.value)}
                                    value={price}
                                />
                            </div>
                            <div className="flex flex-col mb-6">
                                <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                    So luong
                                </label>
                                <input
                                    id="quantityInput"
                                    className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                    required
                                    type="text"
                                    autoComplete=""
                                    placeholder="nhập số lượng"
                                    onChange={(event) => setQuantity(event.target.value)}
                                    value={quantity}
                                />
                            </div>
                            <div className="flex flex-col mb-6">
                                <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                    Nhập số ngày thuê
                                </label>
                                <input
                                    id="renIn"
                                    className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                    required
                                    type="text"
                                    autoComplete=""
                                    placeholder="nhập số ngày thuê"
                                    onChange={(event) => setRental_start_date(event.target.value)}
                                    value={rental_start_date}
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
                            {/* <div className="flex flex-col mb-6">
                            <label className="font-medium text-left text-lg mb-2 text-black " htmlFor="">
                                Nhập costumer_id
                            </label>
                            <input
                                id="costumeridinput"
                                className="px-4 py-3 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                required
                                type="text"
                                autoComplete="email"
                                placeholder="costumer id"
                                onChange={(event) => setcostumer_id(event.target.value)}
                                value={costumer_id}
                            />
                        </div> */}
                            <button className="py-3 bg-btnprimary w-full mb-3 rounded-lg text-xl font-bold text-black  opacity-100 active:opacity-80">
                                <span>Xong </span>

                            </button>
                        </form>


                    </div>

                </div>
            </div>
        </>
    )
}

export default AddCostumer
