import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logoFushion from '../../public/img/logoFushion.jpg'
import { AiOutlineMail, AiOutlineFacebook, AiOutlineYoutube, AiOutlineDown, AiOutlineSearch, AiOutlineUnorderedList } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BiUser } from "react-icons/bi";
import { IoInformationCircleOutline, IoAlbumsOutline } from "react-icons/io5";


import { BsInstagram, BsTwitter, BsFillPenFill } from "react-icons/bs";




function Header() {

    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true)
    const [isMenuUserOpen, setIsMenuUserOpen] = useState(false);
    const [isMenuAlbumOpen, setIsMenuAlbumOpen] = useState(false);
    const [isMenuPriceOpen, setIsMenuPriceOpen] = useState(false);



    const handleMouseUserEnter = () => {
        setIsMenuUserOpen(true);
    };

    const handleMouseUserLeave = () => {
        setIsMenuUserOpen(false);
    };
    const handleMouseAlbumEnter = () => {
        setIsMenuAlbumOpen(true);
    };

    const handleMouseAlbumLeave = () => {
        setIsMenuAlbumOpen(false);
    };

    const handleMousePriceEnter = () => {
        setIsMenuPriceOpen(true);
    };

    const handleMousePriceLeave = () => {
        setIsMenuPriceOpen(false);
    };


    return (
        <div className='bg-black w-full'>
            <div className='w-full flex m-2'>
                <div className='w-1/2 text-white flex justify-center items-center font-sans text-xs'>
                    <ul className='flex justify-center items-center'>
                        <li className='flex justify-center items-center mr-4 '>
                            <span className='text-btnprimary mr-2'>
                                <CiLocationOn />
                            </span>
                            <span>254 Nguyen Van Linh, Hai Chau, DaNang</span>
                        </li>
                        <li className='flex justify-center items-center '>
                            <span className='text-btnprimary mr-2'>
                                <AiOutlineMail />
                            </span>

                            <span>FotoFusion@gmail.com</span>
                        </li>
                    </ul>

                </div>
                <div className='w-1/2 text-white flex justify-center items-center font-sans text-xs'>
                    <ul className='flex justify-center items-center'>
                        <li className='flex justify-center items-center mr-1 '>
                            <a>
                                <BsInstagram />
                            </a>

                        </li>
                        <li className='flex justify-center items-center mr-1 '>
                            <a>
                                <AiOutlineFacebook />
                            </a>
                        </li>
                        <li className='flex justify-center items-center mr-1 '>
                            <a>
                                <BsTwitter />
                            </a>
                        </li>
                        <li className='flex justify-center items-center mr-1 '>
                            <a>
                                <AiOutlineYoutube />
                            </a>
                        </li>
                    </ul>

                </div>

            </div>
            <div class=" border-gray-200 flex text-sm font-sans">
                <div class="w-1/4 flex items-center justify-center max-w-screen-xl mx-auto p-4">
                    <a href="/" class="flex items-center">
                        <img src={logoFushion} class="h-8 mr-3" alt=" Fushion Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">FutoFusion</span>
                    </a>
                </div>
                <div className='w-1/2 flex justify-center items-center'>
                    <ul className='flex justify-center items-center text-white '>
                        <li>
                            <a className='m-4' href="#"> <span><AiOutlineSearch /></span></a>
                        </li>
                        <li>
                            <a className='m-4' href="#"> TRANG CHỦ</a>
                        </li>
                        <li>
                            <a
                                className="m-4 h-full flex items-center justify-center"
                                onMouseEnter={handleMouseAlbumEnter}
                                onMouseLeave={handleMouseAlbumLeave}
                                href="#"
                            >
                                ALBUMS
                                <span className='m-1'><AiOutlineDown /></span>
                                {isMenuAlbumOpen && (
                                    <div className="absolute bg-white text-black mt-[160px] p-4 rounded-lg shadow-lg">
                                        {/* Nội dung của bảng menu */}
                                        <ul>
                                            <li className='pb-2' >
                                                <a href="#">Albums ảnh</a>
                                            </li>
                                            <li className='pb-2'>
                                                <a href="#">Albums video</a>
                                            </li>

                                        </ul>
                                    </div>
                                )}
                            </a>

                        </li>
                        <li>
                            <a
                                className="m-4 flex items-center justify-center"
                                onMouseEnter={handleMousePriceEnter}
                                onMouseLeave={handleMousePriceLeave}
                                href="#"
                            >
                                BẢNG GIÁ
                                <span className='m-1'><AiOutlineDown /></span>
                                {isMenuPriceOpen && (
                                    <div className="absolute bg-white text-black mt-[270px] p-4 rounded-lg shadow-lg">
                                        {/* Nội dung của bảng menu */}
                                        <ul>
                                            <li className='pb-2' >
                                                <a href="#">Chụp ảnh</a>
                                            </li>
                                            <li className='pb-2' >
                                                <a href="#">Quay phim</a>
                                            </li>
                                            <li className='pb-2' >
                                                <a href="#">Trang phục</a>
                                            </li>
                                            <li className='pb-2'>
                                                <a href="#">Thiết bị</a>
                                            </li>
                                            <li className='pb-2'>
                                                <a href="#">Make-up</a>
                                            </li>
                                            <li className='pb-2'>
                                                <a href="#">Phòng studio</a>
                                            </li>

                                        </ul>
                                    </div>
                                )}
                            </a>
                        </li>
                        <li>
                            <a className='m-4' href="#"> KHUYẾN MÃI</a>
                        </li>
                        <li>
                            <a className='m-4' href="#"> BÀI VIẾT</a>
                        </li>
                        <li>
                            <a className='m-4' href="#"> LIÊN HỆ</a>
                        </li>
                        <button className='bg-btnprimary text-white rounded-2xl py-2 px-4'>
                            BOOKING
                        </button>
                    </ul>
                </div>
                {isLogin ? (
                    <div
                        className="w-1/4 flex items-center justify-center cursor-pointer"
                        onMouseEnter={handleMouseUserEnter}
                        onMouseLeave={handleMouseUserLeave}
                    >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                            className="w-14 rounded-full shadow-lg"
                            alt="Avatar"
                        />
                        <span className="text-white text-base ml-4 font-dancing">
                            Liêu Thiện Quang
                            <br />
                            <div className="text-xs text-yellow-600 flex">
                                <BsFillPenFill />
                                <span className="ml-2">VIP</span>
                            </div>
                        </span>
                        {isMenuUserOpen && (
                            <div className="absolute bg-black text-white mt-[370px] p-4 rounded-lg shadow-lg">
                                {/* Nội dung của bảng menu */}
                                <ul>
                                    <li
                                        onClick={() => navigate('/profile')}
                                        className="my-2 px-2 py-2 text-start mx-3 flex items-start justify-start"
                                    >
                                        <span><BiUser /></span>
                                        <span className="text-white font-medium hover:text-red ml-4">
                                            Thông tin Cá Nhân
                                        </span>
                                    </li>
                                    <li
                                        onClick={() => navigate('/profile')}
                                        className="my-2 px-2 py-2 text-start mx-3 flex items-start justify-start"
                                    >
                                        <span><IoInformationCircleOutline /></span>
                                        <span className="text-white font-medium hover:text-red ml-4">
                                            Thông Báo
                                        </span>
                                    </li>
                                    <li
                                        onClick={() => navigate('/profile')}
                                        className="my-2 px-2 py-2 text-start mx-3 flex items-start justify-start"
                                    >
                                        <span><IoAlbumsOutline /></span>
                                        <span className="text-white font-medium hover:text-red ml-4">
                                            Album của tôi
                                        </span>
                                    </li>
                                    <li
                                        onClick={() => navigate('/profile')}
                                        className="my-2 px-2 py-2 text-start mx-3 flex items-start justify-start"
                                    >
                                        <span><AiOutlineUnorderedList /></span>
                                        <span className="text-white font-medium hover:text-red ml-4">
                                            Đơn Hàng
                                        </span>
                                    </li>
                                    <li
                                        onClick={() => navigate('/profile')}
                                        className="my-2 px-2 py-2 text-start mx-3 flex items-start justify-start"
                                    >
                                        <span><BiUser /></span>
                                        <span className="text-white font-medium hover:text-red ml-4">
                                            Voucher của tôi
                                        </span>
                                    </li>
                                    <li
                                        onClick={() => navigate('/profile')}
                                        className="my-2 px-2 py-2 text-start mx-3 flex items-start justify-start"
                                    >
                                        <span><BiUser /></span>
                                        <span className="text-white font-medium hover:text-red ml-4">
                                            Đăng Xuất
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (

                    <div className='w-1/4 flex justify-center items-center '>
                        <ul className='flex justify-center items-center '>
                            <li>
                                <a className='text-red-500 mr-5' href="">ĐĂNG NHẬP</a>
                            </li>
                            <li>
                                <button className='bg-btnaccess text-white rounded-2xl py-2 px-4'>
                                    ĐĂNG KÍ
                                </button>
                            </li>
                        </ul>
                    </div>
                )
                }

            </div >
        </div >
    )
}

export default Header;
