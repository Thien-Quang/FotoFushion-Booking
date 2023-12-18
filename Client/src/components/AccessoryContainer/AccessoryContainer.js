import { DoubleRightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import outFitPage from '../../assets/images/background/outFitPage.png'
import Temp from '../../utils/temp';
import { useNavigate } from 'react-router-dom';
import { Card, Select } from 'antd';
const AccessoryContainer = () => {
    const [asscesoryList, setAsscesoryList] = useState(Temp.asscesoryList);
    const navigate = useNavigate();

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
                <div class='text-center'>
                    <span class='leading-normal  text-violet-800 text-9xl font-serif'>Thiết Bị Hỗ Trợ</span>
                </div>
            </div>
            <div class='bg-black px-9 py-16 flex flex-col gap-20 px-56' >
                {/* filter bar */}
                <div class='w-full flex justify-end border-4 border-solid border-white' >
                    <div class='flex justify-end items-center gap-7 h-16 '>
                        <Select
                            placeholder='Cáp kết nối'
                            options={[]}
                            style={{ width: '150px' }}
                        />
                        <Select
                            placeholder='camera'
                            style={{ width: '150px' }}
                            options={[]}
                        />
                        <Select
                            style={{ width: '150px' }}
                            placeholder='Phông nền'
                            options={[]}
                        />
                        <Select
                            placeholder='Thiết bị khác'
                            style={{ width: '150px' }}
                            options={[]}
                        />
                    </div>
                </div>
                {/* List */}
                <div class='flex flex-wrap justify-between'>
                    {asscesoryList?.map((image, index) => (
                        <div  class=' w-full sm:w-[calc(33.33%-8px)] md:w-[calc(33.33%-16px)] lg:w-[calc(33.33%-16px)] mb-4 aspect-w-4 aspect-h-3' >
                        <Card key={index} style={{width: '100%'}}>
                            <img
                                class='object-cover w-full h-[500px] rounded-xl'
                                alt='wedding'
                                src={image}
                            />
                            <div class='py-4 flex flex-col gap-5 w-full items-start justify-start'>
                                <div  class='w-full px-1/5 text-left' sty>
                                    <span class='w-full font-[bold] text-left text-3xl'>Móc khoá jobon cao cấp có hộp làm quà sang trọng</span>
                                </div>
                                <span class='text-left font-[600] text-xl'>
                                    Giá bán : 150.000 VND
                                </span>
                            </div>
                        </Card>
                        </div>
                    ))}
                </div>

                {/* paging */}
                <div class='w-full mt-10 h-10 flex items-center justify-center text-btnprimary'>
                    <div class=' h-10 flex flex-row gap-4'>
                        <div class='w-20 border-1 border-solid border-2  border-btnprimary flex items-center justify-center '>Page 1/3</div>
                        <div class='flex gap-4'>
                            <div class='w-10 border-1 flex items-center justify-center '>1</div>
                            <div class='w-10 border-1 border-solid border-2  border-btnprimary flex items-center justify-center '>2</div>
                            <div class='w-10 border-1 border-solid border-2  border-btnprimary flex items-center justify-center '>3</div>
                            <div class='w-10 border-1 border-solid border-2  border-btnprimary flex items-center justify-center '>3</div>
                            <div class='w-10 border-1 border-solid border-2  border-btnprimary flex items-center justify-center '>  <DoubleRightOutlined /></div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default AccessoryContainer;