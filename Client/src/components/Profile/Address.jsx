import { Button } from 'flowbite-react';
import React, { useState } from 'react'
import AddAddress from './AddAddress';

const Address = () => {
    const [addAddress, setAddAddress] = useState(false);
    return (
        <div className='w-full h-auto'>
            <div className='relative'>
                <div className='absolute top-0 w-full '>
                    {addAddress ? (
                        <AddAddress onCancel={() => setAddAddress(false)} />
                    ) : (
                        <>
                            <div class="py-4 px-6 flex items-center justify-center">
                                <div className='p-4 rounded shadow-sm m-2 w-full text-white'>
                                    <div className='flex items-center justify-center'>
                                        <label class="block  font-bold mb-2 text-3xl text-white" for="name">
                                            Thông Tin Địa chỉ
                                        </label>
                                    </div>

                                    <div class="mb-4 mx-4 p-4  w-full border-spacing-0 border-2 rounded-lg ">
                                        <label class=" flex justify-between text-white font-bold mb-2" for="name">
                                            Địa chỉ 1
                                            <Button className='bg-red-300 right-0' onClick={() => { setAddAddress(true) }}>Sửa</Button>
                                        </label>
                                        <div class='block p-2 bg-white text-black text-2xl'>
                                            <span>
                                                Nguyen Van A | (+84) 921012359
                                            </span>
                                        </div>
                                        <div class='block p-2 bg-white  text-black text-xl'>
                                            <span>
                                                31 Nguyễn Tri Phương, Thạc Gián, Thanh Khê, Đà Nẵng 550000
                                            </span>
                                        </div>
                                    </div>

                                    <div class="mb-4 mx-4 p-4  w-full border-spacing-0 border-2 rounded-lg ">
                                        <label class="flex justify-between text-white font-bold mb-2" for="name">
                                            Địa chỉ 2
                                            <Button className='bg-red-300 right-0' onClick={() => { setAddAddress(true) }}>Sửa</Button>
                                        </label>
                                        <div class='block p-2 bg-white text-black text-2xl'>
                                            <span>
                                                Nguyen Van B | (+84) 921012359
                                            </span>
                                        </div>
                                        <div class='block p-2 bg-white  text-black text-xl'>
                                            <span>
                                                31 Nguyễn Tri Phương, Thạc Gián, Thanh Khê, Đà Nẵng 550000
                                            </span>
                                        </div>
                                    </div>
                                    <div className='flex justify-end'>
                                        <Button className='bg-green-400 right-0' onClick={() => { setAddAddress(true) }}>Thêm địa chỉ</Button>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Address
