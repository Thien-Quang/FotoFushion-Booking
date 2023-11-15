import React, { useEffect, useState } from 'react'
import * as price from '../../apis/priceList'
import { useLocation } from 'react-router-dom';

const PriceList = () => {

    const [priceLists, setPriceLists] = useState([])
    const location = useLocation();
    const albumsid = location.pathname.split('/').pop();

    console.log(albumsid);

    useEffect(() => {
        const fetchAdd = async () => {
            try {
                const pricelistData = await price.getPriceListByAlbumsid({ albumsid });
                setPriceLists(pricelistData);
            } catch (error) {
                console.error('Error fetching blogposts:', error);
            }
        };

        fetchAdd();


    }, []);

    useEffect(() => { console.log(priceLists); }, [priceLists]);
    return (
        <div>
            <div class="sm:flex sm:flex-col sm:align-center p-10 bg-black">
                <div class="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 md:grid-cols-2 md:max-w-5xl md:mx-auto xl:grid-cols-2">
                    {priceLists.map((pricelist) => {
                        return (
                            <div class="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200 bg-white">
                                <div class="p-6">
                                    <h2 class="text-xl leading-6 font-bold text-slate-900">{pricelist.name}</h2>
                                    <p class="mt-2 text-base text-slate-700 leading-tight">Thiết bị chụp : {pricelist.camera_equipment}</p>
                                    <p class="mt-2 text-base text-slate-700 leading-tight">Thiết bị chiếu sáng : {pricelist.light_equip}</p>
                                    <p class="mt-2 text-base text-slate-700 leading-tight">Địa điểm : {pricelist.location}</p>
                                    <p class="mt-2 text-base text-slate-700 leading-tight">Số lượng camera : {pricelist.number_camera} ; Số lượng hình ảnh : {pricelist.number_photo} </p>
                                    <p class="mt-2 text-base text-slate-700 leading-tight">Số lượng thợ chụp : {pricelist.number_photographer} ; Số lượng thợ phụ : {pricelist.number_assistant_photographer} </p>
                                    <p class="mt-2 text-base text-slate-700 leading-tight" style={{ whiteSpace: 'pre-line' }}>{pricelist.description}  </p>
                                    <p class="mt-8">
                                        <span class="text-4xl font-bold text-slate-900 tracking-tighter">{pricelist.price}</span>

                                        <span class="text-base font-medium text-slate-500"> VND</span>
                                    </p><a href="/bookingalbums"
                                        class="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center">Sử dụng dịch vụ này</a>
                                </div>
                                <div class="pt-6 pb-8 px-6">
                                    <h3 class="text-sm font-bold text-slate-900 tracking-wide uppercase">Bạn sẽ nhận được</h3>
                                    <p role="list" class="mt-4 space-y-3" style={{ whiteSpace: 'pre-line' }}>
                                        {pricelist.additional_info}
                                    </p>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>

        </div>
    )
}

export default PriceList
