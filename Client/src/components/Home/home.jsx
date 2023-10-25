import React from 'react';
import './home.scss'
import FollowImg from '../../assets/images/followImage.png'
import BgHome from '../../assets/images/bg-home.png'

import IconMessenger from '../../assets/images/messenger.png';



import MemberTakePhotos from '../ImageGroup/MemberTakePhotos/MemberTakePhotos';
import CategoryProductGroup from '../ImageGroup/CategoryProductGroup/CategoryProductGroup';
import TopSellerProducts from '../ImageGroup/TopSellerProducts/TopSellerProducts';
const Home = () => {
  return (
    <div className='homeContainter'>
      <img className='bgHome' src={BgHome} alt='bgHOme' />

      <div className='partOverview' >
        <div className='homeFotofusion'>
          <span className='textfotofusion'>FOTOFUSION</span>
          <span className='textPlace'>A place to preserve beautiful moments and more</span>
          <buton className='btnGet'>
            <span>
              GET IT NOW
            </span>
          </buton>
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
            <span className='textTiltle'>CATEGORY</span>
            <span className='textTiltleYellow'>PRODUCT</span>
          </span>
          <div className='tablePart'>
            <CategoryProductGroup />
          </div>
        </div>

        {/* TOP SELLER PRODUCTs */}

        <div className='partCategory'>
          <span className='namePart'>
            <span className='textTiltle'>Top Seller</span>
            <span className='textTiltleYellow'>Products</span>
          </span>
          <div className='tablePart'>
            <TopSellerProducts />
          </div>
        </div>

        {/* MEMBERS TAKE PHOTOS */}

        <div className='partCategory'>
          <span className='namePart'>
            <span className='textTiltle'>MEMBERS</span>
            <span className='textTiltleYellow'>TAKE PHOTOS</span>
          </span>
          <div className='tablePart'>
            <MemberTakePhotos data={[]} />
          </div>
        </div>

        <div className='partCategory' style={{ padding: '100px 0px 0px 0px' }}>
          <img src={FollowImg} alt='follow' />
        </div>

      </div>
    </div>
  );
};

export default Home;    