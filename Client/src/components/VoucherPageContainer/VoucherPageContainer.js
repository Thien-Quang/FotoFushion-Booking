import React, { useEffect, useState } from 'react';
import voucher from '../../assets/images/Temp/voucher1.png'
import { useParams } from 'react-router-dom';
const VoucherPageContainer = () => {
    const id = useParams();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div class="flex items-center justify-center w-full h-screen object-cover flex-shrink-0 z-10 bg-[#C8C8C8] ">
                <div class='mt-[10vh] flex flex-col justify-start  items-start w-3/4'>
                    <h1 class='text-6xl  text-black' >{'VOUCHER CỦA TRÍ'}</h1>
                    <div class="w-96 h-1 mt-1 bg-btnprimary "></div>

                    <div class='flex justify-center items-center w-full'> 
                        <div class='my-10 flex flex-col gap-10 justify-center items-start'>
                            <img src={voucher ?? ''} />
                            <img src={voucher ?? ''} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VoucherPageContainer;