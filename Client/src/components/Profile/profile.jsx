import React, { useState } from 'react'
import { icons } from "../../utils/icons";
import HoSoCaNhan from './HoSoCaNhan';
import bgProfile from '../../public/img/bgprofile.jpg'

const Profile = () => {

    return (
        <div>
            <div class='flex items-center justify-center min-h-screen'>
                <ul class="mx-auto grid max-w-full w-full grid-cols-3  ">
                    <li class="">
                        <input class="peer sr-only" type="radio" value="yes" name="answer" id="yes" checked />
                        <label class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out" for="yes">Hồ Sơ Cá Nhân</label>
                        <div class="h-auto">
                            <HoSoCaNhan />
                        </div>
                    </li>

                    <li class="">
                        <input class="peer sr-only" type="radio" value="no" name="answer" id="no" />
                        <label class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out" for="no">About</label>

                        <div class="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                        </div>
                    </li>

                    <li class="">
                        <input class="peer sr-only" type="radio" value="yesno" name="answer" id="yesno" />
                        <label class="flex justify-center cursor-pointer rounded-full border border-gray-300 bg-white py-2 px-4 hover:bg-gray-50 focus:outline-none peer-checked:border-transparent peer-checked:ring-2 peer-checked:ring-indigo-500 transition-all duration-500 ease-in-out " for="yesno">Something</label>

                        <div class="absolute bg-white shadow-lg left-0 p-6 border mt-2 border-indigo-300 rounded-lg w-[97vw] mx-auto transition-all duration-500 ease-in-out translate-x-40 opacity-0 invisible peer-checked:opacity-100 peer-checked:visible peer-checked:translate-x-1">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, voluptatum! Sequi consequatur error nulla quaerat rem fugit provident tempore nihil a aspernatur ad laboriosam, dolor nisi qui? Esse, mollitia? Nostrum?
                        </div>
                    </li>
                </ul>

            </div>
        </div>
    );
}

export default Profile
