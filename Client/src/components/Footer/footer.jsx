import React from "react";
import logoFushion from "../../public/img/logoFushion.jpg";
import {
    AiFillPhone,
    AiOutlineFacebook,
    AiOutlineYoutube,
    AiOutlineDown,
    AiOutlineMail,
} from "react-icons/ai";
import { BiLogoTiktok } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { BsInstagram, BsTwitter, BsFillPenFill } from "react-icons/bs";

const footer = () => {
    return (
        <div>
            <footer className="bg-black ">
                <div className=" text-white flex justify-center items-center font-sans text-base m-2">
                    <ul className="flex justify-center items-center mt-2">
                        <li className="mr-4">
                            <a className="flex items-center justify-center">
                                <BsInstagram />
                                <span className="ml-2 text-xs">Instagram</span>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a
                                href="https://www.facebook.com/studiofotofusion"
                                className="flex items-center justify-center"
                            >
                                <AiOutlineFacebook />
                                <span className="ml-2 text-xs">Facebook</span>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a className="flex items-center justify-center">
                                <BiLogoTiktok />
                                <span className="ml-2 text-xs">Tiktok</span>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a className="flex items-center justify-center">
                                <BsTwitter />
                                <span className="ml-2 text-xs">Twitter</span>
                            </a>
                        </li>
                        <li className="mr-4">
                            <a className="flex items-center justify-center">
                                <AiOutlineYoutube />
                                <span className="ml-2 text-xs">Youtube</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className=" mx-auto max-w-screen-xl p-4 py-6 lg:py-8 border-b w-[90%] shadow-sm flex items-center justify-center">
                    <div className="md:flex md:justify-between items-center w-[35%]">
                        <div className="mb-6 md:mb-0">
                            <a href="/" className="flex items-center">
                                <img
                                    src={logoFushion}
                                    className="h-8 mr-3"
                                    alt=" Fushion Logo"
                                />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white max-sm:text-sm">
                                    FutoFusion
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="md:flex md:justify-between text-btnprimary w-[18%]">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center">
                                <div className="h-14 w-14 rounded-full flex items-center justify-center bg-[#4C4D52] text-3xl">
                                    <AiFillPhone />
                                </div>
                                <div className="ml-2 max-sm:hidden">
                                    <span>Số Điện Thoại</span>
                                    <br />
                                    <span>+84 12345697698</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex md:justify-between text-btnprimary w-[20%] ">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center">
                                <div className="h-14 w-14 rounded-full flex items-center justify-center bg-[#4C4D52] text-3xl">
                                    <AiOutlineMail />
                                </div>
                                <div className="ml-2 max-sm:hidden">
                                    <span>Email</span>
                                    <br />
                                    <span>fotofushion@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex md:justify-between text-btnprimary w-[27%]">
                        <div className="mb-6 md:mb-0">
                            <div className="flex items-center">
                                <div className="h-14 w-14 rounded-full flex items-center justify-center bg-[#4C4D52] text-3xl">
                                    <CiLocationOn />
                                </div>
                                <div className="ml-2 max-sm:hidden">
                                    <span>Địa Chỉ</span>
                                    <br />
                                    <span>245-Nguyễn Văn Linh Hải Châu Đà Nắng</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center ">
                    <div className="w-[90%] flex text-white justify-center items-center">
                        <div className="w-1/2 justify-items-center align-items-center m-10">
                            <span className="max-sm:hidden">
                                The world without photography will be meaningless to us if there
                                is no light and color, which opens up our minds and expresses
                                passion.
                            </span>
                            <br />
                            <span className="text-3xl font-dancing flex justify-center items-center mt-10">
                                {" "}
                                Latest photo
                            </span>
                            <div className="flex items-center justify-center mt-5">
                                <div className="h-24 w-24 bg-red-500 m-3">
                                    <img
                                        src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/407905775_891812552314186_4074758045118713084_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c42490&_nc_eui2=AeHWR62G239esDTVnJUTfpHQPZAOpa6ulHE9kA6lrq6Uce51UUzk-m12R-HI02hQyCImxq1DT17oCsahPPOnLVVe&_nc_ohc=OilkCxoszqYAX_SdT4Y&_nc_ht=scontent.fdad3-1.fna&oh=00_AfDUlK-PLdKhXG3OJKVsfVO8_uwebN9gNrWq21g7Cfoj4Q&oe=6595F910"
                                        alt=""
                                    />
                                </div>
                                <div className="h-24 w-24 bg-red-500 m-2">
                                    <img
                                        src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/407960024_891812268980881_8691901899099058053_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=c42490&_nc_eui2=AeGv6HIC3tKkoTNMgxlgKbJ1VsrE63QgmQFWysTrdCCZAccbry46pPsHOYjuwwfUHUu-uHVLL8e-JqHp2IWa-f8R&_nc_ohc=A5uF5ja6OV8AX8lJN6c&_nc_oc=AQnTN7T8Ipb72p3qH3R5JUbHEwzYv_hh8un1KC4vPktnSjfPr8-zfBHwgRm_XMmW00SkjawQ4uutiqEDjm50SyFP&_nc_ht=scontent.fdad3-1.fna&oh=00_AfAtXWmaClv3zZbMMvrpmapFGmglrDhb9s_epq8UjQcW0A&oe=6594D7C6"
                                        alt=""
                                    />
                                </div>
                                <div className="h-24 w-24 bg-red-500 m-2">
                                    <img
                                        src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/407890720_891812428980865_6932524042438642612_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=c42490&_nc_eui2=AeEZoJnjfYbTn8ra96wC8DCtmlIQDuektVmaUhAO56S1WeI99Sy5XH8sppGBbu_5KQgwz5k6rc-q9p5t-j52UuaV&_nc_ohc=qU3u1oTy7lAAX9mKp7_&_nc_ht=scontent.fdad3-1.fna&oh=00_AfAe78aTc1mC_Qvrwa_3gWJj4Vj4ZiNQffX_mFywM-KEHA&oe=6594DB96"
                                        alt=""
                                    />
                                </div>
                                <div className="h-24 w-24 bg-red-500 m-2">
                                    <img
                                        src="https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/407946457_891812222314219_1675921179034062848_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c42490&_nc_eui2=AeFimhkxwVP2U5h8zK6g2IpakNLb6ywdCyWQ0tvrLB0LJTwzXWxP8h8V4c3Cun2OqzRI2lYoJ7Q3QoIQakVgHsij&_nc_ohc=dCtciwUKjWwAX9HMLG3&_nc_ht=scontent.fdad3-5.fna&oh=00_AfBh0HbGRWSmLusVLOU5-YGKwVeuKYDk2ykflzOzvVz89w&oe=6595D8FE"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 justify-items-center align-items-center m-10">
                            <span className="flex items-center justify-center text-3xl">
                                {" "}
                                Fanpage Facebook
                            </span>
                            <br />
                            <div className="flex justify-center items-center">
                                <div className="w-[600px] h-[270px]">
                                    <div
                                        class="fb-page"
                                        data-href="https://www.facebook.com/studiofotofusion"
                                        data-tabs="timeline"
                                        data-width="500"
                                        data-height="250"
                                        data-small-header="false"
                                        data-adapt-container-width="true"
                                        data-hide-cover="false"
                                        data-show-facepile="true"
                                    >
                                        <blockquote
                                            cite="https://www.facebook.com/studiofotofusion"
                                            class="fb-xfbml-parse-ignore"
                                        >
                                            <a href="https://www.facebook.com/studiofotofusion">
                                                FotoFusion
                                            </a>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default footer;