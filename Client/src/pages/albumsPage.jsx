import React from 'react'
import AlbumsPage from '../components/AlbumsPhotoPage/AlbumsPage';

const albumsPage = () => {
    document.title = "albums ";
    return (

        <div>
            <AlbumsPage />
        </div>
    )
}

export default albumsPage
