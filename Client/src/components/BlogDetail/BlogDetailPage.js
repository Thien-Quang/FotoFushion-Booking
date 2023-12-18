import React, { useEffect, useState } from 'react';
import { TagsOutlined, LikeOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import imgDemo from '../../assets/images/bg-home.png'
import Temp from '../../utils/temp';
import useWindowSize from '../../hook/use-window-size';
import { useNavigate, useParams } from 'react-router-dom';
import { Input } from 'antd';
import IcFb from '../../assets/icon/ic-fb';
import IcTiktok from '../../assets/icon/ic-tiktok';
import IcInsta from '../../assets/icon/ic-ins';
import { HiOutlineArrowLeft } from "react-icons/hi";
const BlogDetailPage = () => {
    const id = useParams();
    const [bgBlackHeight, setbgBlackHeight] = useState(4000);
    const [blogDetail, setBlogDetail] = useState([]);
    const [topSale, setTopSale] = useState(Temp.listTopSellerProducts);
    const { width, height } = useWindowSize();
    const navigate = useNavigate();
    function handlebooking() {
        navigate('/booking-album');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        setBlogDetail(Temp.blogList[0]);
    }, [id])


    return (
        <>
            <div style={{ height: `${bgBlackHeight}px`, width: width }} class="flex items-center justify-center w-full h-screen object-cover flex-shrink-0 z-10 bg-black ">
                <div class='mt-[10vh] flex flex-col justify-start  items-start w-3/4'>
                    <h1 class='text-6xl  text-white' >{blogDetail?.title}</h1>
                    <div class="w-8 h-1 mt-5 bg-transparent border-b-2 border-btnprimary"></div>
                    <span class='mt-3 text-base text-btnprimary' >{blogDetail?.date}</span>

                    {/* mainContent */}
                    <div class="w-full mt-20 flex flex-row gap-10 text-white">
                        <div class='basis-2/3 flex flex-col justify-start items-start gap-4'>
                            <div class="w-full  flex items-center justify-center">
                                <img src={blogDetail?.bgTop} class='' alt='imgaeTop' />
                            </div>
                            <span class='float-left'>
                                Ngày nay, Fujifilm mang xu hướng xem phim trở lại. Họ có thể chụp JPEG bằng nhiều
                                bộ lọc tích hợp khác nhau. Máy ảnh Canon có làm được điều tương tự không?
                            </span>
                            <div class="w-full flex items-center justify-center">
                                <img src={imgDemo} class='max-h-96 ' alt='imgaeTop' />
                            </div>
                            <span>
                                Câu trả lời là có. Bạn có thể làm điều đó từ lâu nhưng không phải ai cũng biết. Canon cung cấp cho bạn
                                “Picture Style Editor” với nhiều công cụ để xây dựng kiểu dáng Phim của riêng bạn để chụp JPEG.
                                Nhưng nó khá khó sử dụng nên chúng tôi đã làm điều đó cho bạn với bộ sưu tập các kiểu dáng phim
                            </span>

                            <div class="w-full flex items-center justify-center">
                                <img src={imgDemo} class='max-h-96 ' alt='imgaeTop' />
                            </div>

                            <span>
                                Bạn có thể chụp các ảnh có màu phim JPEG như trên bằng các kiểu ảnh phim 1, 2, 3 của chúng tôi.
                                Hiện đang được giảm giá nếu bạn mua combo “Gói kiểu dáng hình ảnh giống như phim” – $99
                                (bạn tiết kiệm được $57)
                            </span>

                            <div class="w-full flex items-center justify-center">
                                <img src={imgDemo} class='max-h-96 ' alt='imgaeTop' />
                            </div>

                            <span>
                                Bạn có thể chụp các ảnh có màu phim JPEG như trên bằng các kiểu ảnh phim 1, 2, 3 của chúng tôi.
                                Hiện đang được giảm giá nếu bạn mua combo “Gói kiểu dáng hình ảnh giống như phim” – $99
                                (bạn tiết kiệm được $57)
                            </span>

                            {/* booking */}
                            <div class='flex justify-start items-start w-full'>
                                <button onClick={handlebooking} class="bg-btnprimary mt-20 text-white hover:bg-white hover:text-btnprimary font-bold py-2 px-4 rounded-full">
                                    Booking
                                </button>
                            </div>


                            {/* tag + cmt */}
                            <div class='text-white mt-10 grid grid-col-2 divide-y-2 w-full'>
                                <div class='h-14 w-10 flex flex-row items-center justify-center'> <TagsOutlined class='mx-2' />Tag</div>
                                <div class='my-4 py-5 flex items-center justify-between'>
                                    <button class='border-none  rounded-lg p-1 text-white bg-btnprimary flex items-center justify-center gap-2'>
                                        <LikeOutlined />
                                        <span>
                                            Thích
                                        </span>
                                    </button>
                                    <div class='flex items-center h-10 justify-center '>
                                        <button class='border-none p-1 text-white bg-transparent flex items-center justify-center gap-2'>
                                            <LeftOutlined />
                                            <span>
                                                Bài viết trước
                                            </span>
                                        </button>
                                        <div class='bg-transparent w-1 h-1/2 border-l-2 ml-2 border-white' />
                                        <button class='border-none p-1 text-white bg-transparent flex items-center justify-center gap-2'>
                                            <span>
                                                Bài viết sau
                                            </span>
                                            <RightOutlined />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class='basis-1/3 border-2 border-slate-600 p-8 flex flex-col gap-10'>
                            {/* search */}
                            <div class='flex flex-col gap-6'>
                                <h1 class='text-4xl h-8 font-bold text-white' >{'Tìm Kiếm'}</h1>
                                <div class="w-8 h-1 bg-transparent border-b-2 border-btnprimary"></div>
                                <Input placeholder='Nhập và nhấn enter ' />
                            </div>
                            {/* follow */}
                            <div class='flex flex-col gap-6'>
                                <h1 class='text-4xl font-bold text-white' >{'Theo dõi'}</h1>
                                <div class="w-8 h-1  bg-transparent border-b-2 border-btnprimary"></div>
                                <div class='flex justify-start  items-center gap-6 '>
                                    <IcFb size={50} />
                                    <IcInsta size={50} />
                                    <IcTiktok size={50} />
                                </div>
                            </div>
                            {/* blog */}
                            <div class='flex flex-col gap-6'>
                                <h1 class='text-4xl font-bold text-white' >{'Bài viết'}</h1>
                                <div class="w-8 h-1bg-transparent border-b-2 border-btnprimary"></div>
                                <div class='flex flex-col mt-3 justify-start items-start'>
                                    <buton class='px-2 text-2xl flex items-center justify-start h-14 gap-4 w-full border-slate-400 border-b-2 border-white bg-zinc-950  hover:gap-8 duration-300'>
                                        {<HiOutlineArrowLeft />}
                                        Tin mới
                                    </buton>
                                    <buton class='px-2 text-2xl flex items-center justify-start h-14 gap-4 w-full border-slate-400 border-b-2 border-white bg-zinc-950  hover:gap-8 duration-300'>
                                        {<HiOutlineArrowLeft />}
                                        Ảnh chụp
                                    </buton>
                                    <buton class='px-2 text-2xl flex items-center justify-start h-14 gap-4 w-full border-slate-400 border-b-2 border-white bg-zinc-950  hover:gap-8 duration-300'>
                                        {<HiOutlineArrowLeft />}
                                        Hướng dẫn
                                    </buton>
                                </div>
                            </div>
                            {/* category */}
                            <div class='flex flex-col gap-6'>
                                <h1 class='text-4xl font-bold text-white' >{'Danh mục '}</h1>
                                <div class="w-8 h-1bg-transparent border-b-2 border-btnprimary"></div>
                                <div class='flex flex-col mt-3 justify-start items-start'>
                                    <buton class='px-2 text-2xl flex items-center justify-start h-14 gap-4 w-full border-b-2 border-white bg-zinc-950  hover:gap-8 duration-300'>
                                        {<HiOutlineArrowLeft />}
                                        Danh mục 1
                                    </buton>
                                    <buton class='px-2 text-2xl flex items-center justify-start h-14 gap-4 w-full border-b-2 border-white bg-zinc-950  hover:gap-8 duration-300'>
                                        {<HiOutlineArrowLeft />}
                                        Danh mục 2
                                    </buton>
                                    <buton class='px-2 text-2xl flex items-center justify-start h-14 gap-4 w-full border-b-2 border-white bg-zinc-950  hover:gap-8 duration-300'>
                                        {<HiOutlineArrowLeft />}
                                        Danh mục 3
                                    </buton>
                                    <buton class='px-2 text-2xl flex items-center justify-start h-14 gap-4 w-full border-b-2 border-white bg-zinc-950  hover:gap-8 duration-300'>
                                        {<HiOutlineArrowLeft />}
                                        Danh mục 4
                                    </buton>
                                    <buton class='px-2 text-2xl flex items-center justify-start h-14 gap-4 w-full border-b-2 border-white bg-zinc-950  hover:gap-8 duration-300'>
                                        {<HiOutlineArrowLeft />}
                                        Danh mục 5
                                    </buton>
                                    <buton class='px-2 text-2xl flex items-center justify-start h-14 gap-4 w-full border-b-2 border-white bg-zinc-950  hover:gap-8 duration-300'>
                                        {<HiOutlineArrowLeft />}
                                        Danh mục 6
                                    </buton>
                                </div>
                            </div>

                            {/* top sale  */}
                            <div class='flex flex-col gap-6'>
                                <h1 class='text-4xl font-bold text-white' >{'Danh mục '}</h1>
                                <div class="w-8 h-1bg-transparent border-b-2 border-btnprimary"></div>
                                <div class='flex flex-col mt-3 justify-start items-start'>
                                    {topSale?.map((item, index) => (
                                        <div class='h-44 px-2 cursor-pointer  text-2xl flex items-center justify-start  gap-4 w-full border-b-2 border-white bg-zinc-950  hover:gap-8 duration-300'>
                                            <div class='flex gap-5 ' >
                                                <img class='h-40 w-30' alt='itemImg' src={item?.image} />
                                                <div class='flex  flex-col gap-5'>
                                                    <span class='text-3xl'>{item?.name}</span>
                                                    <p class='flex gap-4'>
                                                         <span class='line-through'> ${item?.price} </span> 
                                                         <span class=''> ${item?.salePrice}     </span> 
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div class='flex flex-col gap-6'>
                                <h1 class='text-4xl font-bold text-white' >{'Tags '}</h1>
                                <div class="w-8 h-1  bg-transparent border-b-2 border-btnprimary"></div>
                                <div class='mt-3 flex flex-col justify-start items-start'>
                                    <div class='flex flex-wrap px-2 py-4 text-2xl  w-full '>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800' >black-white</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800'  >canon</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800' >black-white</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800' >black-white</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800'  >canon</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800'  >canon-eos-m</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800'  >canon</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800'  >canon-eos-m</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800'  >canon-eos-750d</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800'  >canon-eos-m</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800'  >canon-eos-750d</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800'  >canon-eos-m</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800'  >canon-eos-750d</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800'  >canon-eos-m</a>
                                        <a href='' class='min-w-4 m-1 p-2 bg-zinc-800'  >canon-eos-m</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetailPage;