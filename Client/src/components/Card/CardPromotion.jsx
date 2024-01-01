import React from 'react';
const CardPromotion = (props) => {
    return (
        <div class='w-full min-h-80 rounded-lg bg-gray-950 flex flex-row gap-6 '>
            {/* <img class='w-1/3 h-full' src={props?.imageLink} alt='imgBlog' /> */}
            <div class='px-5 py-5 w-full flex flex-col gap-5'>
                <span class='text-white text-4xl font-Montserrat'>{props?.title}</span>
                <div class='flex gap-3'>
                    <span class='text-btnprimary text-base '>{props?.date}</span>
                    <span class='text-btnprimary text-base '>{props?.author}</span>
                </div>
                <span class='min-h-1/3 text-white text-base '>{props?.description}</span>

                <>
                    <div class='flex justify-end gap-4 w-full'>
                        <div class='cursor-pointer rounded-md bg-red-500 text-white px-2 py-1 h-[35px]' >
                            <span class='font-bold bold ' >{props?.status}</span>
                        </div>
                        <div class='cursor-pointer rounded-md bg-green-500 text-white px-2 py-1 h-[35px]' >
                            <span class='font-bold bold ' >{props?.type}</span>
                        </div>
                    </div>
                </>
            </div>
        </div>
    );
};

export default CardPromotion;