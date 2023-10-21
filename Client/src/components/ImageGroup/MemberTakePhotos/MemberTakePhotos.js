import React, { useState } from 'react';
import Avatar from '../../../assets/images/aodaiPhoto.png'
import ProfileMembers from '../../Card/CardProfileMembers/ProfileMembers';


const MemberTakePhotos = (data) => {
    const [tabAtive, setActiveTab] = useState(1);
    function hanleActiveTab(num) {
        setActiveTab(num);
    }
    return (
        <div className='mainContainerTopSeller'>
            <div className='tableTopSeller' style={{ gap: 40 }}>
                <ProfileMembers
                    name='Lê Bình Nguyên'
                    avatar={Avatar}
                    role='founder'
                    fb='fb.com'
                    mail='lebinhgnguyen@gmail.com'
                />
                <ProfileMembers
                    avatar={Avatar}
                    name='Lê Bình Nguyên'
                    role='founder'
                    fb='fb.com'
                    mail='lebinhgnguyen@gmail.com'
                />
                <ProfileMembers
                    avatar={Avatar}
                    name='Lê Bình Nguyên'
                    role='founder'
                    fb='fb.com'
                    mail='lebinhgnguyen@gmail.com'
                />
            </div>
        </div>
    );
};

export default MemberTakePhotos;