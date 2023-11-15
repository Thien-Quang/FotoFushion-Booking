import React from 'react';

const BookingOnline = () => {
    return (
        <div className='mt-40 w-full flex justify-center items-center'>
            <div className='w-[60%] border border-black p-4'>

                <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                    <div class="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
                        Booking Online
                    </div>
                    <form class="py-4 px-6" action="" method="POST">
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="name">
                                Tên Khách Hàng
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name" type="text" placeholder="Enter your name" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="email">
                                Email
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email" type="email" placeholder="Enter your email" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="phone">
                                Địa điểm
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone" type="tel" placeholder="Enter your phone number" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="date">
                                Ngày Chụp
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="date" type="date" placeholder="Select a date" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="service">
                                    Thể Loại
                                </label>
                                <select
                                    class="shadow appearance-none border rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Theloai" name="Theloai">
                                    <option value="">Chọn bối cảnh bạn muốn chụp</option>
                                    <option value="haircut">Beauty</option>
                                    <option value="coloring">Ngoại Cảnh</option>
                                    <option value="styling">Gia Đình</option>
                                    <option value="facial">Cho Bé</option>
                                    <option value="facial">Cặp Đôi</option>
                                    <option value="facial">Kỉ Yếu</option>
                                    <option value="facial">Ảnh Cưới</option>
                                </select>
                            </div>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="phone">
                                    Bối Cảnh
                                </label>
                                <select
                                    class="shadow appearance-none border rounded w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="boicanh" name="boicanh">
                                    <option value="">Chọn concept bạn muốn chụp</option>
                                    <option value="haircut">Theo Mùa</option>
                                    <option value="coloring">Halloween</option>
                                    <option value="styling">Trung Thu</option>
                                    <option value="styling">Ngày Tết</option>
                                    <option value="styling">Sinh Nhật</option>
                                </select>
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="phone">
                                Địa Điểm
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone" type="tel" placeholder="Enter your phone number" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="phone">
                                Trang Phục
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone" type="tel" placeholder="Enter your phone number" />
                        </div>
                        <div className='flex items-center justify-center'>
                            <div class="mb-4 w-full">
                                <label class="block text-gray-700 font-bold mb-2" for="phone">
                                    Ngày Thử
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="date" type="date" placeholder="Select a date" />
                            </div>
                            <div class="mb-4 w-full ml-2">
                                <label class="block text-gray-700 font-bold mb-2" for="time">
                                    Thời Gian Thử
                                </label>
                                <input
                                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="time" type="time" placeholder="Select a time" />
                            </div>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="phone">
                                MakUp
                            </label>
                            <input
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="phone" type="tel" placeholder="Enter your phone number" />
                        </div>

                        <div class="mb-4">
                            <label class="block text-gray-700 font-bold mb-2" for="message">
                                Message
                            </label>
                            <textarea
                                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="message" rows="4" placeholder="Enter any additional information"></textarea>
                        </div>
                        <div class="flex items-center justify-center mb-4">
                            <button
                                class="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
                                type="submit">
                                BooKing
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingOnline;