import React from 'react';
import './Home.scss'
import FollowImg from '../../assets/images/followImage.png'
import BgHome from '../../assets/images/bg-home.png'

import IconMessenger from '../../assets/images/messenger.png';
import IcTiktok from '../../assets/icon/ic-tiktok';
import IcInsta from '../../assets/icon/ic-ins';
import IcFb from '../../assets/icon/ic-fb';

import MemberTakePhotos from '../ImageGroup/MemberTakePhotos/MemberTakePhotos';
import CategoryProductGroup from '../ImageGroup/CategoryProductGroup/CategoryProductGroup';
import TopSellerProducts from '../ImageGroup/TopSellerProducts/TopSellerProducts';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate('/bookingOnline');
    }
    return (
        <div className='homeContainter'>
            <img className='bgHome' src={BgHome} alt='bgHOme' />
            <div className='partOverview' >
                <div className='homeFotofusion'>
                    <span className='textfotofusion'>FOTOFUSION</span>
                    <span className='textPlace'>A place to preserve beautiful moments and more</span>
                    <button onClick={handleClick} className='btnGet'>
                        <span>
                            Đặt lịch ngay
                        </span>
                    </button>
                </div>
                <div className='chatBox'>
                    <div className='messegeDemo'>
                        <div className='iconCollapse'>
                            <div className='divide'>-</div>
                        </div>
                        <span>Hi! How can we help you?</span>
                    </div>
                    <img src={IconMessenger} alt='messeebger' />
                </div>
            </div>

            <div className='partMiddle' >
                {/* CATEGORY PRODUCT */}
                <div className='partCategory'>
                    <span className='namePart'>
                        <span className='textTiltle'>DANH MỤC</span>
                        <span className='textTiltleYellow'>SẢN PHẨM</span>
                    </span>
                    <div className='tablePart'>
                        <CategoryProductGroup />
                    </div>
                </div>

                {/* TOP SELLER PRODUCTs */}
                <div className='partCategory'>
                    <span className='namePart'>
                        <span className='textTiltle'>SẢN PHẨM</span>
                        <span className='textTiltleYellow'>KHUYỄN MÃI</span>
                    </span>
                    <div className='tablePart'>
                        <TopSellerProducts />
                    </div>
                </div>
                <div className='partCategory' >
                    <span className='namePart'>
                        <span className='textTiltle'>THÀNH VIÊN</span>
                        <span className='textTiltleYellow'>STUDIO</span>
                    </span>
                    <div className='tablePart'>
                        <MemberTakePhotos data={[]} />
                    </div>
                </div>
            </div>

            {/* MEMBERS TAKE PHOTOS */}
            <div className='partCategory' style={{ padding: '100px 0px 0px 0px' }}>
                <img src={FollowImg} alt='follow' />
            </div>

            <div className='partCategory' style={{ padding: '20px 0px 20px 0px', background: '#000' }} >
                <div className='partFolow'>
                    <span className='linkFollow' >
                        <IcFb size={30} />
                        Facebook
                    </span>
                    <span className='linkFollow' >
                        <IcTiktok size={30} />
                        Tiktok
                    </span>
                    <span className='linkFollow' >
                        <IcInsta size={30} />
                        Instagram
                    </span>
                </div>
            </div>
            <footer />
        </div>
    );
};

export default Home;    
