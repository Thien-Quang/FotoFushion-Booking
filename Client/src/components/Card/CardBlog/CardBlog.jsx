import { RightOutlined } from '@ant-design/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CardBlog = (props) => {
    console.log(props);
    const navigate = useNavigate();
    function handleNavigate() {
        navigate(`/blog/${props?.id}`)
    }
    return (
        <div class='w-full h-96  bg-gray-950 flex flex-row gap-6 '>
            <img class='w-1/3 h-full' src={props?.imageLink} alt='imgBlog' />
            <div class='px-5 py-5  flex flex-col gap-5'>
                <span class='text-white text-5xl font-serif '>{props?.title}</span>
                <span class='text-btnprimary text-base '>{props?.date}</span>
                <span class='min-h-1/3 text-white text-base '>{props?.describe}</span>
                <div onClick={handleNavigate} class='w-44 p-0 flex items-center justify-start text-lg overflow-hidden shadow  cursor-pointer text-btnprimary border-none hover:text-2xl transition-all duration-[250ms] ease-out group-hover:w-full '>
                    ĐỌC THÊM
                    <RightOutlined class='mx-3' />
                </div>
            </div>
        </div>
    );
};

export default CardBlog;