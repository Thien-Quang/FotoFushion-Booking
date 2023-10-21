import React from 'react';
import './Cardstyles.scss'
const CardTopSeller = ({ image, title, type, price,typeName='', salePrice }) => {
    return (
        <div className='mainCard'>
            <div className='itemForm' >
                <img src={image} alt='image1'/>
                <div  className='content' >
                    <span className='textCategory' > {title} </span>
                    <span className='textType' > {typeName}  </span>
                    <span className='priceConainer' >
                        {price && <span className='textPrice' >{price}  </span>}
                        <span className='textPriceSale' >
                        {salePrice}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CardTopSeller;