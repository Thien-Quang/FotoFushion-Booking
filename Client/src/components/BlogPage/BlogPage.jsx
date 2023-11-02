import React, { useEffect, useState } from 'react';
import CardBlog from '../../components/Card/CardBlog/CardBlog';
import Temp from '../../utils/temp';
import { DoubleRightOutlined } from '@ant-design/icons';
import useWindowSize from '../Card/hook/use-window-size';

const BlogPage = () => {
    const [blogList, setBlogList] = useState([]);
    const [bgBlackHeight, setbgBlackHeight] = useState();
    const { width, height } = useWindowSize();

    useEffect(() => {
        setBlogList(Temp.blogList);
    }, [])

    useEffect(() => {
        setbgBlackHeight((256) + (blogList?.length * 454))
    }, [blogList])

    return (
        <>
            <div style={{ height: `${bgBlackHeight}px`, width: width }} class=" flex items-center justify-center w-full h-screen object-cover flex-shrink-0 z-10 bg-black ">
                <div class='absolute top-64 flex flex-col justify-start  items-start w-3/4'>
                    <h1 class='text-6xl  text-white' >Blog</h1>
                    <div class="w-8 h-1 mt-5 bg-transparent border-b-2 border-btnprimary"></div>

                    {/* blogList */}
                    <div class="w-full mt-20 flex flex-col gap-10">
                        {blogList?.map((item) => (
                            <CardBlog
                                id={item?.id}
                                key={item?.key}
                                imageLink={item?.imageLink}
                                title={item?.title}
                                date={item?.date}
                                describe={item?.describe}
                            />
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
            </div>
        </>
    );
};

export default BlogPage;