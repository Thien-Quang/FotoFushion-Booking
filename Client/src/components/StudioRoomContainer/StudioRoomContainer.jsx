import React, { useEffect, useState } from 'react';
import BookingBG from '../../assets/images/booking-bg.png'
import studio1 from '../../assets/images/Temp/studio1.png'
import studio2 from '../../assets/images/Temp/studio2.png'
import Temp from '../../utils/temp';
import { useNavigate, useParams } from 'react-router-dom';
const StudioRoomContainer = () => {
    const [asscesoryList, setAsscesoryList] = useState(Temp.asscesoryList);
    const navigate = useNavigate();
    function handleClickOutfit() {
        navigate('/outfits-detail');
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div class='' style={{ paddingTop: '5%' }}>
            <div class='flex flex-col items-center justify-center'
                style={{
                    background: `url(${BookingBG}) no-repeat`,
                    backgroundSize: 'cover',
                    height: '80vh',
                    marginTop: '-40px'
                }}
            >
                <div class='text-center'>
                    <span class='leading-normal  text-green-500 text-9xl font-serif'>Phòng Studio</span>
                </div>
            </div>

            <div class=' bg-black flex flex-col items-center justify-center w-full'>
                <div class='w-3/5 flex flex-col gap-16'>
                    <div class='my-40'>
                        <div class='flex'>
                            <img src={studio1} style={{ width: '50%' }} alt='studio1' />
                            <img src={studio2} style={{ width: '50%' }} alt='studio2' />
                        </div>
                    </div>

                    <p class='text-5xl text-white text-center'>
                        Studio  FOTOFUSHION  nơi mà những Photographer và sinh viên nên tham khảo qua. Studio cung cấp không gian phòng Vô Cực, phòng Studio, phòng Concept,… phục vụ cho việc Chụp Ảnh/Quay Phim
                        Bạn đang tìm kiếm một không gian thoải mái để chụp ảnh quan trọng hay một địa điểm để quay phim quảng cáo, thì không gian studio chụp ảnh của chúng tôi luôn đáp ứng nhu cầu đó một cách hoàn hảo với đầy  đủ trang thiết bị đèn, phông nền hiện đại
                        Studio Tiệm Chụp Ảnh có đầy đủ trang thiết bị đèn, phông nền hiện đại để tổ chức các buổi chụp hình theo nhiều concept khác nhaua
                        Đặc biệt, có thể cam kết hợp đồng thuê thương mại dài hạn. Bảng giá cho thuê phòng studio chụp ảnh quay phim Tp.Đà Nắng “cực rẻ” nhưng lại vô cùng tiện dụng.
                    </p>
                    <p class='text-5xl text-fuchsia-700 text-center'>
                        Các bạn có nhu cầu thuê Studio có thể tham khảo bảng giá dưới đây:
                    </p>

                    <div class='text-center'>
                        <span class='text-white text-center w-full text-7xl'>  STUDIO PHÒNG TRƠN  </span>
                    </div>

                    <div class='my-40'>
                        <div class='flex'>
                            <img src={studio1} style={{ width: '50%' }} alt='studio1' />
                            <img src={studio2} style={{ width: '50%' }} alt='studio2' />
                        </div>
                    </div>

                    <div class='text-center'>
                        <span class='text-white text-center w-full text-7xl'>  STUDIO Tham khảo  </span>
                    </div>

                    <div class='my-40'>
                        <div class='flex'>
                            <img src={studio1} style={{ width: '50%' }} alt='studio1' />
                            <img src={studio2} style={{ width: '50%' }} alt='studio2' />
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default StudioRoomContainer;