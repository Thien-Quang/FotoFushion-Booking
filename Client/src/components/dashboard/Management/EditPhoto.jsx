import React, { useContext, useEffect, useState } from 'react'
import * as requestApi from '../../../apis/request'
import AuthContext from '../../../context/authProvider';

const EditPhoto = () => {
    const { auth } = useContext(AuthContext);
    const [requests, setRequests] = useState([])
    useEffect(() => {
        const fetchAdd = async () => {
            try {
                const request = await requestApi.getRequest(auth.accessToken);
                console.log(request);
                setRequests(request)
            } catch (error) {
                console.error('Error in fetchAdd:', error);
            }
        };
        if (auth.accessToken !== undefined) {
            fetchAdd();
        }
    }, [auth.accessToken])
    return (

        <div className='w-full'>

            <div className='flex items-center justify-center'>
                <h1 className='font-bold text-5xl m-10'>Bảng Yêu Cầu Chỉnh Sửa Hình Ảnh</h1>
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-3/4'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Hình Ảnh</th>
                                    <th>Yêu Cầu</th>
                                    <th>Tình Trạng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {requests.map((item) => {
                                    return (
                                        <tr>

                                            <td>
                                                <div className="flex items-center gap-3">
                                                    <div className="avatar">
                                                        <div className="mask mask-squircle w-24 h-24">
                                                            <img src={item.img_url_old} alt="photo" />
                                                        </div>
                                                    </div>

                                                </div>
                                            </td>
                                            <td className='w-1/2'>
                                                <span className='line-clamp-3'>{item.request}</span>
                                            </td>
                                            <td>
                                                {item.status}

                                            </td>
                                            <th>
                                                <button className="btn btn-success"
                                                //onClick={() => openModal(item)}
                                                >Xóa</button>
                                            </th>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default EditPhoto
