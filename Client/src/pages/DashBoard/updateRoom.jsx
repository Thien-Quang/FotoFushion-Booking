import React from 'react'
import AddRoomPhoto from '../../components/dashboard/AddRoomPhoto';

const updateRoom = () => {
    document.title = "Add room ";
    return (

        <div>
            <AddRoomPhoto />
        </div>
    )
}

export default updateRoom
