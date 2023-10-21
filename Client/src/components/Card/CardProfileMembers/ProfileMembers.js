import React, { useId } from 'react';
import './ProfileMembers.scss'
import IcFaceBook from '../../../assets/icon/icFb.png'
import IcEmail from '../../../assets/icon/icEmail.png'
import { Tooltip } from 'antd';
const ProfileMembers = ({name='',avatar='',role='',fb='',mail=''}) => {
    const id = useId();

    function handleClickLink(link) {
          if (!link.startsWith('http://') && !link.startsWith('https://')) {
          link = 'http://' + link;
  }
        window.open(link,'_blank')
    }
    console.log(IcFaceBook)
    return (
        <div className='mainProfile'>
            <img className='imgProfile' src={avatar} alt={id} />
            <span className='textNameProfile'> {name}</span>
            <span className='textRoleProfile'> {role}</span>
            <div className='iconLink'>
                <Tooltip placement="top" title={fb} >
                    <img src={IcFaceBook} alt="facebook" onClick={()=>handleClickLink(fb)}/>
                </Tooltip>
                <Tooltip placement="top" title={mail} >
                    <img src={IcEmail} alt="mail"  onClick={()=>handleClickLink(mail)} />
                </Tooltip>
            </div>
        </div>
    );
};

export default ProfileMembers;