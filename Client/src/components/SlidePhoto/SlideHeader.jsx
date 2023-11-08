import React from 'react'
import { Carousel } from 'flowbite-react';


const SlideHeader = () => {
    return (
        <div className='w-full h-[720px]'>
            <Carousel slideInterval={5000}>
                <img src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/399152226_1080232576484209_7766169548954260806_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=ZQC5ujTl3aIAX9nDET5&_nc_ht=scontent.fsgn2-7.fna&cb_e2o_trans=t&oh=00_AfArGIWfj8o903Id4_uAbRz_2j_Hds-uubMo9ybvs0bmrw&oe=654B11A1" alt="..." />
                <img src="https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/399265390_1080232633150870_1646844021497598428_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=-bJOFsfMDKwAX8jWBKC&_nc_ht=scontent.fsgn2-6.fna&cb_e2o_trans=t&oh=00_AfAv5rWo7HjFC1i8lGe7rxY7lkn3v4GM1fusmQ_MskJ3Sg&oe=654BC473" alt="..." />
                <img src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/399289392_1080232719817528_8009488896896222191_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=_VONXtE_jzUAX_WQ5K9&_nc_ht=scontent.fsgn2-3.fna&cb_e2o_trans=t&oh=00_AfASz_l9sep5PWgjbWVF87E_9s65X_WDlw0-mlwbSN2kwA&oe=654A0E7D" alt="..." />
                <img src="https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/397891716_1718847565303038_7793793876336972016_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=qOWZIUmE71kAX_sqHo5&_nc_ht=scontent.fsgn2-9.fna&cb_e2o_trans=t&oh=00_AfClE5h4oPb83Jh99ur_qP9b5j5TCg242zJaGfqoawaGPg&oe=654AE003" alt="..." />
                <img src="https://scontent.fsgn2-10.fna.fbcdn.net/v/t39.30808-6/398738280_3634273896806187_5014318220946027669_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EsAOxOirdhwAX8QdOfh&_nc_ht=scontent.fsgn2-10.fna&cb_e2o_trans=t&oh=00_AfAiJwQSPFJoi_S2u5GvKZOuEngRuLxj2u6csKDUKSraAg&oe=654B30F3" alt="..." />
            </Carousel>
        </div>


    )
}

export default SlideHeader
