import React, { useEffect, useState } from 'react';
import outFitPage from '../../assets/images/background/outFitPage.png'
import Temp from '../../utils/temp';
import { useNavigate } from 'react-router-dom';
import {  Select } from 'antd';
const OutFitDetailContainer = () => {
    const [outfitDetail, setOutfitDetail] = useState(Temp.outfitDetail);
    const navigate = useNavigate();
    function handleClickOutfit() {
        navigate('/outfits-detail');
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
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
                    <span class='w-60 leading-normal  text-yellow-300 text-9xl font-serif'> {outfitDetail?.name ? outfitDetail?.name : 'VÁY CƯỚI'} </span>
                </div>
            </div>
            <div class='bg-black px-9 py-16 flex flex-col gap-20 px-56' >
                {/* filter bar */}
                <div class='w-full flex justify-end border-4 border-solid border-white' >
                    <div class='flex justify-end items-center gap-7 h-16 '>
                        <Select
                            placeholder='Giá thuê'
                            options={[]}
                            style={{ width: '150px' }}
                        />
                        <Select
                            placeholder='Giá mua'
                            style={{ width: '150px' }}
                            options={[]}
                        />
                        <Select
                            style={{ width: '150px' }}
                            placeholder='Bố cục'
                            options={[]}
                        />
                        <Select
                            placeholder='Loại Váy'
                            style={{ width: '150px' }}
                            options={[]}
                        />
                    </div>
                </div>
                {/* VÁY CƯỚI List */}
                <div class='flex flex-wrap justify-between'>
                    {outfitDetail?.data?.map((image, index) => (
                        <div key={index} class=' rounded-lg px-12 py-10 h-[700px] w-full bg-[#472727] sm:w-[calc(33.33%-8px)] md:w-[calc(33.33%-16px)] lg:w-[calc(33.33%-16px)] mb-4 aspect-w-4 aspect-h-3'>
                            <img
                                class='object-cover w-full h-[500px] rounded-xl'
                                alt='wedding'
                                src={image}
                            />
                            <div class='py-4 flex flex-col gap-5 w-full items-start justify-between'>
                                <div class='w-full px-1/5 text-center' sty>
                                    <span class='w-3/5 text-2xl text-white' >Váy xòa lễ dòng limited LT-495</span>
                                </div>
                                <span class='text-center text-xl text-white'>
                                    Giá thuê : 5.000.000 VND
                                </span>
                                <span class='text-center text-xl text-white'>
                                    Giá bán : 70.000.000 VND
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div >
    );
};

export default OutFitDetailContainer;