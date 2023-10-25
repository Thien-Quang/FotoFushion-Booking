import React from 'react';
import BgHome from '../../assets/images/bg-home.png'

const AlbumsPhotoPage = () => {
    document.title = 'Albums Photo'
    return (
        <div className='bookingContainer'>
            <img src={BgHome} />
            <span className='titleAlbums'>ALBUMS PHOTO</span>
            <div className='partBookingContainer'>
        </div>
        </div>
    );
};

export default AlbumsPhotoPage;