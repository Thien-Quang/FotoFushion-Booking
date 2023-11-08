import React, { useEffect, useState, useRef } from 'react';
import SlideHeader from '../SlidePhoto/SlideHeader'
import { getListPhotoByAlbumsId } from '../../apis/photo'
import { useLocation } from 'react-router-dom';
import '../helples/AlbumsPhotoPage.scss'
import { Button, Modal } from 'flowbite-react';

const AlbumsPhotoPage = () => {
    const topRef = useRef(null); // Define topRef with an initial value of null

    useEffect(() => {
        if (topRef.current) {
            topRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, []);
    const [photos, setPhotos] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [urlImg, setUrlImg] = useState('');
    const location = useLocation();
    const albumsid = location.pathname.split('/').pop(); // Đặt albumsid theo giá trị bạn muốn truyền.
    console.log(albumsid);
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

        fetchData();
    }, []);


    return (
        <div className='bg-black'>
            <div className='w-full h-auto'>
                <SlideHeader />
            </div>

            <div className='flex items-center justify-center'>
                <div className="gallerys w-3/4">
                    {photos.map((photo, index) => {
                        return (
                            <div className="pics scale-100 hover:scale-110" key={index} onClick={() => { setOpenModal(true); setUrlImg(photo.url_photo) }}>
                                <img src={photo.url_photo}
                                    alt={`Hình ảnh ${index + 1}`}
                                    style={{ width: '100%' }} />
                            </div>
                        )
                    })}
                </div>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header></Modal.Header>
                <Modal.Body>
                    <div className="flex items-center justify-center">
                        <img src={urlImg} alt="Hình ảnh" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Thoát
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    );
};

export default AlbumsPhotoPage;
