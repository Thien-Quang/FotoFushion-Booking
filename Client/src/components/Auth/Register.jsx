
import { icons } from "../../utils/icons";

import { ToastContainer, toast } from 'react-toastify';
import { Spinner } from '@material-tailwind/react';
import 'react-toastify/dist/ReactToastify.css';

import React, { useContext, useEffect, useState } from 'react';
// import * as registerServices from '../../services/registerServices';
// import * as authServices from '../../services/authServices';

import * as authApis from '../../apis/auth'


import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/authProvider';
import { Carousel } from 'flowbite-react';


const Register = () => {
    const { setAuth } = useContext(AuthContext);
    const [hiddenPass, setHiddenPass] = useState(true);
    const [reHiddenPass, setReHiddenPass] = useState(true);
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const notify = (message, type) => {
        const toastType = type === "success" ? toast.success : toast.error
        return toastType(message, {
            position: 'top-center',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    }

    const replaceEmail = (email) => {
        const username = email
            .split('@')[0]
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, '');
        return email.replace(/^[^@]+/, username);
    };

    useEffect(() => {
        if (submit) {
            const fetchRegister = async () => {

                const register = await authApis.register(email, password, phoneNumber);
                if (register.statusCode === 201) {
                    const authentication = await authApis.loginApi(email, password);
                    if (authentication.statusCode === 200) {
                        const accessToken = authentication.response.accessToken;
                        setAuth({ email, password, accessToken, phoneNumber });
                        setLoading(false);
                        navigate('/');
                    } else {
                        notify(authentication.error.response.data.message);
                        setLoading(false);
                        setSubmit(false);
                    }
                } else {
                    notify(register.error.response.data.message);
                    setLoading(false);
                    setSubmit(false);
                }
            };
            fetchRegister();
        }
    }, [email, navigate, password, phoneNumber, setAuth, submit]);

    const handleCheckInput = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        const isEmailValid = emailRegex.test(email);
        if (isEmailValid && email.endsWith('@gmail.com')) {
            // email is valid and ends with "@gmail.com"
            if (rePassword === password) {
                setLoading(true);
                setSubmit(true);
            } else {
                notify('Mật khẩu nhập lại không khớp');
                setSubmit(false);
            }
        } else {
            // email is not valid or does not end with "@gmail.com"
            notify('Email phải bao gồm đuôi "@gmail.com"');
            setSubmit(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleCheckInput();
    };

    return (
        <>
            <ToastContainer />
            <div className="h-screen flex items-center bg-gradient-to-r from-[#444444] to-[#000000]">
                <div className="bg-[#2d2e2e]  w-full sm:w-[90%] md:w-[80%] lg:w-[75%] lg:grid lg:grid-cols-10 shadow-xl mx-auto rounded-[20px] pb-4 lg:pb-0">

                    <div className="text-center lg:col-span-4">
                        <h1 className="text-white text-3xl font-bold py-6">Đăng Kí</h1>
                        <div className="w-[70%] m-auto text-white">
                            <form action="" onSubmit={(e) => handleSubmit(e)}>

                                <div className="flex flex-col mb-2">
                                    <label className="font-medium text-left text-lg mb-2 " htmlFor="">
                                        Địa Chỉ Email
                                    </label>
                                    <input
                                        className="text-gray-500 px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                        type="email"
                                        placeholder="youraccount@gmail.com"
                                        onChange={(e) => setEmail(replaceEmail(e.target.value))}
                                        value={email}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label className="font-medium text-left text-lg mb-2 " htmlFor="">
                                        Số điện thoại
                                    </label>
                                    <input
                                        className="text-gray-500 px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                        type=""
                                        placeholder="Số điện thoại của bạn"
                                        onChange={(e) => setPhoneNumber((e.target.value))}
                                        value={phoneNumber}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col mb-2">
                                    <label className="font-medium text-left text-lg mb-2 " htmlFor="">
                                        Mật Khẩu
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="text-gray-500 w-full px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                            type={hiddenPass ? 'password' : 'text'}
                                            placeholder="Mật khẩu của bạn"
                                            onChange={(e) => setPassword(e.target.value)}
                                            value={password}
                                            required
                                        />
                                        {hiddenPass ? (
                                            <span onClick={setHiddenPass}
                                                className="absolute top-5 right-6">
                                                <icons.BsEyeSlashFill />
                                            </span>
                                        ) : (
                                            <span onClick={setHiddenPass}
                                                className="absolute top-5 right-6">
                                                <icons.AiOutlineEye />
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col mb-6">
                                    <label className="font-medium text-left text-lg mb-2 " htmlFor="">
                                        Xác Nhận Mật Khẩu
                                    </label>
                                    <div className="relative">
                                        <input
                                            className="text-gray-500 w-full px-4 py-2 border-2 border-[#afafaf] rounded-lg shadow-lg outline-none focus:border-primaryColor placeholder:text-lg text-lg"
                                            type={reHiddenPass ? 'password' : 'text'}
                                            required
                                            placeholder="Nhập lại mật khẩu của bạn"
                                            onChange={(e) => setRePassword(e.target.value)}
                                            value={rePassword}
                                        />
                                        {reHiddenPass ? (
                                            <span onClick={setReHiddenPass}
                                                className="absolute top-5 right-6">
                                                <icons.BsEyeSlashFill />
                                            </span>
                                        ) : (
                                            <span onClick={setReHiddenPass}
                                                className="absolute top-5 right-6">
                                                <icons.AiOutlineEye />
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <button className="py-2 bg-btnprimary w-full mb-3 rounded-lg text-xl font-bold text-white opacity-100 active:opacity-80">
                                    {loading ? (
                                        <div className="flex items-center justify-center">
                                            <Spinner className="h-6 w-6 mr-4" /> <span>Đang tải....</span>
                                        </div>
                                    ) : (
                                        <span>Đăng Ký</span>
                                    )}
                                </button>
                            </form>

                            <div className="mt-2 mb-9">
                                <p className="">
                                    Đã có tài khoản?
                                    <Link to="/login" className="text-lg text-btnprimary ml-2">
                                        Đăng nhập
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:block h-full w-full col-span-6 bg-black">
                        <div className="h-full w-full object-cover lg:rounded-r-[20px] ">
                            <Carousel slideInterval={3000}>
                                <img src="https://scontent.fsgn2-11.fna.fbcdn.net/v/t39.30808-6/346804316_1708398109573396_4930974549931971745_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=llA8Zm2dVPUAX9tkYwm&_nc_ht=scontent.fsgn2-11.fna&cb_e2o_trans=t&oh=00_AfBdlyAKsJ8DWGzXdDNmaAMfI0TPVus3EXg-Z-3Tkzd6iA&oe=654D9823" alt="..." />
                                <img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/313383795_690765426085262_3320058881456267337_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fQ-2H4dIzW0AX81YtSX&_nc_ht=scontent.fsgn2-6.fna&cb_e2o_trans=t&oh=00_AfBHbdKD3xqy7R2fcxVjB39TlKhMkUBVR3z6XiENB4lp2w&oe=654C49C8" alt="..." />
                                <img src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/294340839_617457030082769_7304421650753286022_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=fclnroZiTukAX-GLxFX&_nc_ht=scontent.fsgn2-4.fna&cb_e2o_trans=t&oh=00_AfA4i5YJcJhbsfw9rHfIpPygdEjLXRW0fsnhS9Ter2CjoA&oe=654CF17E" alt="..." />
                                <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/271764871_4717464278342095_3568007753134653748_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=BrPFR9HrCCoAX_04jru&_nc_ht=scontent.fsgn2-9.fna&cb_e2o_trans=t&oh=00_AfDSAGHxzY3qBWhURUHlUKKumX-8nEN46GWMvANBlYsIIg&oe=654DBB52" alt="..." />
                                <img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/260473629_4550140771741114_8690258067032479908_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sSVZqARqvPYAX8y021o&_nc_ht=scontent.fsgn2-6.fna&cb_e2o_trans=t&oh=00_AfBcPx_XUfYoapeR9ryE1EmJnGzDbFwLzh_C9SaoHAXM4Q&oe=654C4988" alt="..." />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Register
