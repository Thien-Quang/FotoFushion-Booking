import React, { useEffect, useState } from 'react';
import TopSeller1 from '../../../assets/images/topseller1.png'
import TopSeller2 from '../../../assets/images/topseller2.png'
import TopSeller3 from '../../../assets/images/topseller3.png'
import TopSeller4 from '../../../assets/images/topSeller4.png'
import TopSeller5 from '../../../assets/images/topseller5.png'
import TopSeller6 from '../../../assets/images/topseller6.png'
import TopSeller7 from '../../../assets/images/topseller7.png'
import './style.scss'
import CardTopSeller from '../../Card/CardTopSeller/CardTopSeller';

const listTopSellerProducts = [
    {
        id: 1,
        image: TopSeller1,
        name: 'Film - looks Canon Picture Styles Pack',
        type: 1,
        typeName: 'Canon Picture Styles',
        price: 156,
        salePrice: 56,
    },
    {
        id: 2,
        image: TopSeller2,
        name: 'Portrait 1 - Picture Styles for Canon',
        type: 2,
        typeName: 'SONY PICTURE PROFILES',
        price: 39,
        salePrice: 35,
    },
    {
        id: 3,
        image: TopSeller3,
        name: 'Film 6 — Picture Styles for Canon',
        type: 3,
        typeName: 'CAPTURE ONE STYLES',
        salePrice: 56,
    },
    {
        id: 4,
        image: TopSeller4,
        name: 'Film 1 - Picture Styl for Canon',
        type: 1,
        typeName: 'Canon Picture Styles',
        price: 39,
        salePrice: 33,
    },
    {
        id: 5,
        image: TopSeller1,
        name: 'Film 2 - looks Canon Picture Styles Pack',
        type: 3,
        typeName: 'CAPTURE ONE STYLES',
        price: 156,
        salePrice: 78,
    },
    {
        id: 6,
        image: TopSeller5,
        name: 'Street Life 1 - Picture tyles for Canon',
        type: 3,
        typeName: 'CAPTURE ONE STYLES',
        price: 156,
        salePrice: 56,
    },
    {
        id: 7,
        image: TopSeller6,
        name: 'Street Life 2 - Picture tyles for Canon',
        type: 3,
        typeName: 'CAPTURE ONE STYLES',
        price: 156,
        salePrice: 56,
    },
    {
        id: 8,
        image: TopSeller7,
        name: 'Urban I - Picture Styles for Canon',
        type: 2,
        typeName: 'SONY PICTURE PROFILES',
        price: 156,
        salePrice: 56,
    },
]
const TopSellerProducts = (data) => {
    const [tabActive, setActiveTab] = useState(0);
    const [listProduct, setList] = useState(listTopSellerProducts);
    function hanleActiveTab(num) {
        setActiveTab(num);
    }
    useEffect(() => {
        if (tabActive != 0) {
            const newList = listTopSellerProducts.filter((item) => item.type === tabActive);
            setList(newList);
        }
        else{
           setList(listTopSellerProducts);
        }
    },[tabActive])
    return (
        <div className='mainContainerTopSeller'>
            <div className='menuTopSeller'>
                <button className='linkCategory' onClick={()=> hanleActiveTab(0)} >
                    All
                    {tabActive === 0 && <div className='activeTab' />}
                </button>
                <button className='linkCategory' onClick={() => hanleActiveTab(1)} >
                    CANNON PICTURE STYLES
                    {tabActive === 1 && <div className='activeTab' />}
                </button>
                <button className='linkCategory' onClick={() => hanleActiveTab(2)} >
                    SONY PICTURE PROFILES
                    {tabActive === 2 && <div className='activeTab' />}
                </button>
                <button className='linkCategory' onClick={() => hanleActiveTab(3)} >
                    CAPTURE ONE STYLES
                    {tabActive === 3 && <div className='activeTab' />}
                </button>
                <button className='linkCategory' onClick={() => hanleActiveTab(4)} >
                    FREEBIES
                    {tabActive === 4 && <div className='activeTab' />}
                </button>
            </div>

            <div className='tableTopSeller'>
                {listProduct?.map((item) => (
                    <CardTopSeller
                        image={item?.image}
                        title={item.name}
                        type={item.type}
                        typeName={item.typeName}
                        price={item?.price}
                        salePrice={item?.salePrice}
                    />
                ))}
                {listProduct?.length === 0 && <span style={{fontSize: 40, color: '#ffffff' }}>Không tìm thấy sản phẩm</span>  }
            </div>
        </div>
    );
};

export default TopSellerProducts;