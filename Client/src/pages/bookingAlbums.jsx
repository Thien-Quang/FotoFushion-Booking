import React from 'react'
import BookingAlbum from '../components/BookingAlbums/bookingAlbums'

const bookingAlbums = () => {
    document.title = "Đặt chụp hình ";
    return (

        <div>
            <BookingAlbum />
        </div>
    )
}

export default bookingAlbums
