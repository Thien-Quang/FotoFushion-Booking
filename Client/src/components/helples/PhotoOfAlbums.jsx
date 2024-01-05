import React, { useEffect, useState } from 'react';
import { getListPhotoByAlbumsId } from '../../apis/photo'
import './AlbumsPhotoPage.scss'


const PhotoOfAlbums = (item) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [photos, setPhotos] = useState([]);
    const [urlImg, setUrlImg] = useState('');
    const [albumsid, setAlbumsid] = useState('');



    useEffect(() => {
        console.log(item);
        if (item?.item) {
            setAlbumsid(item.item.id || '')
        }
    }, [item]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await getListPhotoByAlbumsId({ albumsid });
                console.log(response);
                setPhotos(response);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách ảnh:', error);
            }
        };
        if (albumsid !== '') {

            fetchData();
        }

    }, [albumsid]);
    return (
        <div className='bg-black'>
            <div className='flex items-center justify-center'>
                <div className="gallerys w-3/4">
                    {photos.map((photo, index) => {
                        return (
                            <div className="pics scale-100 hover:scale-110" key={index} onClick={() => { document.getElementById('my_modal_2').showModal(); setUrlImg(photo.url_photo) }}>
                                <img src={photo.url_photo}
                                    alt={`Hình ảnh ${index + 1}`}
                                    style={{ width: '100%' }} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <div className="flex items-center justify-center">
                        <img src={urlImg} alt="Hình ảnh" className='object-cover w-full h-full' />
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default PhotoOfAlbums
