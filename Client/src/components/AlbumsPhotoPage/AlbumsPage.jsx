import React, { useEffect, useState, useRef } from 'react'
import { getAlbumsPhoto } from '../../apis/albumphoto'
import { getListPhotoByAlbumsId } from '../../apis/photo'

import { Carousel, Button } from 'flowbite-react';
import SlideHeader from '../SlidePhoto/SlideHeader'
import { Link } from 'react-router-dom';




const AlbumsPage = () => {
    const [albums, setAlbums] = useState([]);


    const topRef = useRef(null); // Define topRef with an initial value of null

    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await getAlbumsPhoto();
                console.log(response);
                setAlbums(response);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách ảnh:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className='w-full h-auto max-sm:mt-[-50%]'>
                <SlideHeader />
                <div className='flex'>
                    <h1 className='text-6xl mt-[-20%] ml-[10%] font-medium text-white z-40 max-sm:text-xl max-sm:mt-[-70%]'>
                        ALBUMS ẢNH CỦA FOTOFUSHION
                    </h1>
                </div>
            </div>
            <div className='flex items-center justify-center mt-10 max-sm:mt-[-40%] bg-black'>
                <div className='w-[70%]'>
                    {albums.slice(0, 11).map((album, index) =>

                    (
                        <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96 m-8 border">
                            <Carousel>
                                <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/400133296_3635294760024529_695736477589872104_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KV36NVuGvjAAX8L6Rev&_nc_ht=scontent.fsgn2-9.fna&cb_e2o_trans=t&oh=00_AfBPISBfOMgbVE1fxzN9hY6Om10PDPnSh_Ph7pF_tpXsaw&oe=654FF773" alt="..." />
                                <img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/399911165_2365351833652173_6513988111171524119_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jJn41ExVG0wAX-NQdAR&_nc_ht=scontent.fsgn2-3.fna&cb_e2o_trans=t&oh=00_AfBMsUVJsH7fC9XE7gN3oHPzjozM_qKIZ3e_oT6QprKN7g&oe=65512539" alt="..." />
                                <img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/396399242_3302352019908949_6534209206364905444_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=eW7jQhdqFPcAX-WZrhN&_nc_ht=scontent.fsgn2-6.fna&cb_e2o_trans=t&oh=00_AfDQvhakSdNLO5mIloYmPnc9ptUFTyx2NqDXCL6uU8pB1A&oe=6550D431" alt="..." />
                                <img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/399308851_2144565995736909_338741662552014171_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qWG5kN_APD0AX-bEOKl&_nc_oc=AQmi9-e_JZ65Z1ArmX3jjvSik-mVEcMws2tRvGMLVRBU0QtCLQjo5KIiSHebmZWV7CJr0DyVByUuYOwIPT4LgF_V&_nc_ht=scontent.fsgn2-3.fna&cb_e2o_trans=t&oh=00_AfASPCWv9sY7ldfl0Nx4D1yBXoASR0pfahCuqDyr-V2Ymg&oe=6550DB37" alt="..." />
                                <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/399761884_887567202727228_7102688080921190757_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=RJRbcygTIWUAX_n4MmZ&_nc_ht=scontent.fsgn2-9.fna&cb_e2o_trans=t&oh=00_AfAqP8vwixlyJzTVG6P1qLRR5BmUsMsVrDTBJ3tMAVm19w&oe=654FC08F" alt="..." />
                            </Carousel>
                            <Link to={`/photoofalbums/${album.id}`}>
                                <div className='cursor-pointer m-2 max-sm:w-[20%] max-sm:ml-10 max-sm:mt-10'>
                                    <div className=' flex items-center justify-center '>
                                        <div className='h-auto w-64 bg-white max-sm:hidden'>
                                            <img src={album.cover_photo} alt="" className='h-64 w-64 object-cover' />
                                        </div>
                                    </div>
                                    <div className=' flex items-center justify-center m-2'>
                                        <span className='text-white font-medium text-5xl max-sm:text-2xl'>Albums</span>
                                    </div>
                                    <div className=' flex items-center justify-center'>
                                        <span className='text-white font-medium text-4xl max-sm:text-2xl'>{album.name}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default AlbumsPage
