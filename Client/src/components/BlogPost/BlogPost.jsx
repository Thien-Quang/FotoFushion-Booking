import React, { useEffect, useState } from 'react'
import { icons } from '../../utils/icons';
import { Dropdown } from 'flowbite-react';
import * as blogpost from '../../apis/blogpost'
import * as photo from '../../apis/photo'
import '../helples/AlbumsPhotoPage.scss'


const BlogPost = () => {

    const [blogposts, setBlogposts] = useState([]);
    const [photos, setPhotos] = useState([]);
    //const [blogid, setBlogid] = useState([]);



    useEffect(() => {
        const fetchAdd = async () => {
            try {
                const blogpostsData = await blogpost.getAllBlogPost();
                setBlogposts(blogpostsData);
              
            } catch (error) {
                console.error('Error fetching blogposts:', error);
            }
        };

        fetchAdd();


    }, []);


    ///useEffect(() => { console.log(photos); }, [photos]);
    return (
        <div className='mt-40 flex items-center justify-center bg-black'>
            <div className='w-[80%]'>
                {blogposts.map(async (blogpost, index) => {

                    return (
                        <div className='m-4' key={blogpost.id}>
                            <div class="bg-white rounded shadow-lg max-w-[80%] mx-auto ">
                                <header class="p-4 flex">
                                    <img src="https://via.placeholder.com/200" class="float-left rounded-full w-10 h-10 m-1 mr-3" />
                                    <div>
                                        <h3 class="text-lg font-bold">{blogpost.author}</h3>
                                        <p class="text-sm text-gray-600">{blogpost.date}</p>
                                    </div>
                                </header>
                                <section >
                                    <div className='flex items-center justify-center'>
                                        <span className='text-2xl w-[75%] font-semibold flex items-start justify-start max-sm:text-base'>
                                            {blogpost.title}
                                        </span>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div className="gallerys w-3/4">
                                            {photos[index]?.slice(0, 6).map((photo, index) => {
                                                return (
                                                    <div className="pics scale-100 hover:scale-110" key={index}
                                                    //  onClick={() => { setOpenModal(true); setUrlImg(photo.url_photo) }}
                                                    >
                                                        <img src={photo.url_photo}
                                                            alt={`Hình ảnh ${index + 1}`}
                                                            style={{ width: '100%' }} />
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-center'>
                                        <div className='w-[90%] bg-gray-200 border shadow-lg rounded-sm flex items-center justify-center'>
                                            <div className='m-4'>
                                                <p style={{ whiteSpace: 'pre-line' }}>
                                                    {blogpost.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                                <footer class="p-4">
                                    <div className='grid grid-cols-3'>
                                        <div className='flex items-center justify-center'>
                                            <span className='py-2 px-6 rounded-md cursor-pointer hover:bg-blue-300 font-semibold flex items-center justify-center'>
                                                <span className='mr-2 '>
                                                    <icons.FcLikePlaceholder />
                                                    {/* <icons.FcLike /> */}
                                                </span>
                                                <span>
                                                    Thích
                                                </span>
                                            </span>
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <div className='py-2 px-6 rounded-md cursor-pointer hover:bg-blue-300 font-semibold flex items-center justify-center'>
                                                <span className='mr-2 '>
                                                    <icons.AiOutlineComment />
                                                </span>
                                                <span>Bình Luận</span>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <div className='py-2 px-6 rounded-md cursor-pointer hover:bg-blue-300 font-semibold flex items-center justify-center'>
                                                <span className='mr-2 '>
                                                    <icons.BiShare />
                                                </span>
                                                <Dropdown label="Chia sẻ" inline>
                                                    <Dropdown.Item>Chia sẻ lên FaceBook</Dropdown.Item>
                                                    <Dropdown.Item>Chia sẻ lên Instagram</Dropdown.Item>
                                                    <Dropdown.Item>Chia sẻ qua messenger</Dropdown.Item>
                                                    <Dropdown.Item>Chia sẻ qua zalo</Dropdown.Item>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </div>
                                </footer>
                            </div>
                        </div>
                    );
                })}


            </div>
        </div>
    )
}

export default BlogPost
