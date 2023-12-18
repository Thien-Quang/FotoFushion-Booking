import React, { useEffect, useState } from 'react';
import outFitPage from '../../assets/images/background/outFitPage.png'
import Temp from '../../utils/temp';
import { useNavigate, useParams } from 'react-router-dom';
const OutFitsContainer = () => {
    const [outFitList, setOutFitList] = useState(Temp.outfit);
    const navigate = useNavigate();
    function handleClickOutfit() {
        navigate('/outfits-detail');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    console.log(outFitList);
    return (
        <div class='' style={{ paddingTop: '5%' }}>
            <div class='flex flex-col items-center justify-center'
                style={{
                    background: `url(${outFitPage}) no-repeat`,
                    backgroundSize: 'cover',
                    height: '100vh'
                }}
            >
                <div class='text-center' style={{ width: 444 }} >
                    <span class='w-60 leading-normal  text-sky-500 text-9xl font-serif'>LỰA CHỌN TRANG PHỤC</span>
                </div>
            </div>
            <div class='bg-black px-9 py-16 flex flex-col gap-20'>
                {/* VÁY CƯỚI */}
                <div class='p-20  border-4 border-b-[none] border-solid border-white ' style={{paddingBottom: 0, borderBottom: 'none', borderRight: 'none'}}>
                    <div class='px-12 w-[432px] relative h-16 top-[-6.1rem] left-[-5.3rem] bg-black'>
                        <span class='text-4xl text-white'>VÁY CƯỚI</span>
                    </div>
                    <div class='flex justify-between'>
                        {outFitList?.weddingDress?.map((image) =>
                            <img class='max-w-[340px] cursor-pointer ' alt='wedding' src={image} />
                        )}
                    </div>
                    <div class='flex justify-end my-7'>
                        <button onClick={(e) => handleClickOutfit(e)} class='h-14 w-36 px-5 py-1 text-2xl rounded-3xl bg-lime-500 text-white' >
                            Lựa chọn
                        </button>
                    </div>
                </div>

                {/*VEST CHÚ RỂ */}
                <div class='p-20  border-4 border-b-[none] border-solid border-white ' style={{paddingBottom: 0, borderBottom: 'none', borderRight: 'none'}}>
                    <div class='px-12 w-[432px] relative h-16 top-[-6.1rem] left-[-5.3rem] bg-black'>
                        <span class='text-4xl text-white'>VEST CHÚ RỂ </span>
                    </div>
                    <div class='flex justify-between'>
                        {outFitList?.vest?.map((image) =>
                            <img class='max-w-[340px] cursor-pointer ' alt='wedding' src={image} />
                        )}
                    </div>
                    <div class='flex justify-end my-7'>
                        <button class='h-14 w-36 px-5 py-1 text-2xl rounded-3xl bg-lime-500 text-white' >
                            Lựa chọn
                        </button>
                    </div>
                </div>

                {/* PHÙ DÂU */}
                <div class='p-20  border-4 border-b-[none] border-solid border-white ' style={{paddingBottom: 0, borderBottom: 'none', borderRight: 'none'}}>
                    <div class='px-12 w-[432px] relative h-16 top-[-6.1rem] left-[-5.3rem] bg-black'>
                        <span class='text-4xl text-white'>PHÙ DÂU</span>
                    </div>
                    <div class='flex justify-between'>
                        {outFitList?.weddingDress?.map((image) =>
                            <img class='max-w-[340px] cursor-pointer ' alt='wedding' src={image} />
                        )}
                    </div>
                    <div class='flex justify-end my-7'>
                        <button class='h-14 w-36 px-5 py-1 text-2xl rounded-3xl bg-lime-500 text-white' >
                            Lựa chọn
                        </button>
                    </div>
                </div>


                {/* ÁO DÀI */}
                <div class='p-20  border-4 border-b-[none] border-solid border-white ' style={{paddingBottom: 0, borderBottom: 'none', borderRight: 'none'}}>
                    <div class='px-12 w-[432px] relative h-16 top-[-6.1rem] left-[-5.3rem] bg-black'>
                        <span class='text-4xl text-white'>ÁO DÀI</span>
                    </div>
                    <div class='flex justify-between'>
                        {outFitList?.weddingDress?.map((image) =>
                            <img class='max-w-[340px] cursor-pointer ' alt='wedding' src={image} />
                        )}
                    </div>
                    <div class='flex justify-end my-7'>
                        <button class='h-14 w-36 px-5 py-1 text-2xl rounded-3xl bg-lime-500 text-white' >
                            Lựa chọn
                        </button>
                    </div>
                </div>


                {/* KỈ YẾU */}
                <div class='p-20  border-4 border-b-[none] border-solid border-white ' style={{paddingBottom: 0, borderBottom: 'none', borderRight: 'none'}}>
                    <div class='px-12 w-[432px] relative h-16 top-[-6.1rem] left-[-5.3rem] bg-black'>
                        <span class='text-4xl text-white'> KỈ YẾU </span>
                    </div>
                    <div class='flex justify-between'>
                        {outFitList?.weddingDress?.map((image) =>
                            <img class='max-w-[340px] cursor-pointer ' alt='wedding' src={image} />
                        )}
                    </div>
                    <div class='flex justify-end my-7'>
                        <button class='h-14 w-36 px-5 py-1 text-2xl rounded-3xl bg-lime-500 text-white' >
                            Lựa chọn
                        </button>
                    </div>
                </div>

                {/* ĐỒ ĐÔI */}
                <div class='p-20  border-4 border-b-[none] border-solid border-white ' style={{paddingBottom: 0, borderBottom: 'none', borderRight: 'none'}}>
                    <div class='px-12 w-[432px] relative h-16 top-[-6.1rem] left-[-5.3rem] bg-black'>
                        <span class='text-4xl text-white'> ĐỒ ĐÔI</span>
                    </div>
                    <div class='flex justify-between'>
                        {outFitList?.weddingDress?.map((image) =>
                            <img class='max-w-[340px] cursor-pointer ' alt='wedding' src={image} />
                        )}
                    </div>
                    <div class='flex justify-end my-7'>
                        <button class='h-14 w-36 px-5 py-1 text-2xl rounded-3xl bg-lime-500 text-white' >
                            Lựa chọn
                        </button>
                    </div>
                </div>

                {/* ĐẦM DẠ HỘI */}
                <div class='p-20  border-4 border-b-[none] border-solid border-white ' style={{paddingBottom: 0, borderBottom: 'none', borderRight: 'none'}}>
                    <div class='px-12 w-[432px] relative h-16 top-[-6.1rem] left-[-5.3rem] bg-black'>
                        <span class='text-4xl text-white'> ĐẦM DẠ HỘI</span>
                    </div>
                    <div class='flex justify-between'>
                        {outFitList?.weddingDress?.map((image) =>
                            <img class='max-w-[340px] cursor-pointer ' alt='wedding' src={image} />
                        )}
                    </div>
                    <div class='flex justify-end my-7'>
                        <button class='h-14 w-36 px-5 py-1 text-2xl rounded-3xl bg-lime-500 text-white' >
                            Lựa chọn
                        </button>
                    </div>
                </div>

                {/* CHO BÉ */}
                <div class='p-20  border-4 border-b-[none] border-solid border-white ' style={{paddingBottom: 0, borderBottom: 'none', borderRight: 'none'}}>
                    <div class='px-12 w-[432px] relative h-16 top-[-6.1rem] left-[-5.3rem] bg-black'>
                        <span class='text-4xl text-white'>CHO BÉ</span>
                    </div>
                    <div class='flex justify-between'>
                        {outFitList?.weddingDress?.map((image) =>
                            <img class='max-w-[340px] cursor-pointer ' alt='wedding' src={image} />
                        )}
                    </div>
                    <div class='flex justify-end my-7'>
                        <button class='h-14 w-36 px-5 py-1 text-2xl rounded-3xl bg-lime-500 text-white' >
                            Lựa chọn
                        </button>
                    </div>
                </div>

                {/* THẾ GIỚI */}
                <div class='p-20  border-4 border-b-[none] border-solid border-white ' style={{paddingBottom: 0, borderBottom: 'none', borderRight: 'none'}}>
                    <div class='px-12 w-[432px] relative h-16 top-[-6.1rem] left-[-5.3rem] bg-black'>
                        <span class='text-4xl text-white'> THẾ GIỚI</span>
                    </div>
                    <div class='flex justify-between'>
                        {outFitList?.weddingDress?.map((image) =>
                            <img class='max-w-[340px] cursor-pointer ' alt='wedding' src={image} />
                        )}
                    </div>
                    <div class='flex justify-end my-7'>
                        <button class='h-14 w-36 px-5 py-1 text-2xl rounded-3xl bg-lime-500 text-white' >
                            Lựa chọn
                        </button>
                    </div>
                </div>

                {/* CỔ TRANG */}
                <div class='p-20  border-4 border-b-[none] border-solid border-white ' style={{paddingBottom: 0, borderBottom: 'none', borderRight: 'none'}}>
                    <div class='px-12 w-[432px] relative h-16 top-[-6.1rem] left-[-5.3rem] bg-black'>
                        <span class='text-4xl text-white'> CỔ TRANG</span>
                    </div>
                    <div class='flex justify-between'>
                        {outFitList?.weddingDress?.map((image) =>
                            <img class='max-w-[340px] cursor-pointer ' alt='wedding' src={image} />
                        )}
                    </div>
                    <div class='flex justify-end my-7'>
                        <button class='h-14 w-36 px-5 py-1 text-2xl rounded-3xl bg-lime-500 text-white' >
                            Lựa chọn
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OutFitsContainer;