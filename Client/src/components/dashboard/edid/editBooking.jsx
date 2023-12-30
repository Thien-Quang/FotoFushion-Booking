import React, { useContext, useEffect, useState } from 'react'
import * as PriceApi from '../../../apis/priceList'
import * as CostumesApi from '../../../apis/costumer'
import * as RoomApi from '../../../apis/room'
import * as EquipmentApi from '../../../apis/equipment'
import * as LocationApi from '../../../apis/location'
import * as BookingApi from '../../../apis/booking'

import { formatDateTime } from '../../helples/Format'
import AuthContext from '../../../context/authProvider';
import { Spinner } from '@material-tailwind/react';
import { ToastContainer, toast } from 'react-toastify';

const EditBooking = (item) => {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [phone_number, setPhone_number] = useState('');

    const [albums_id, setAlbums_id] = useState('');
    const [booking_time, setBooking_time] = useState('');

    const [room_id, setRoom_id] = useState('');
    const [roomName, setRoomName] = useState('');

    const [costume_id, setCostume_id] = useState('');
    const [costumeName, setCostumeName] = useState('');

    const [equipment_id, setEquipment_id] = useState('');
    const [equipmentName, setEquipmentName] = useState('');

    const [locations_id, setLocations_id] = useState('');
    const [locationName, setLocationName] = useState('');

    const [location, setLocation] = useState('');
    const [messenger, setMessenger] = useState('');
    const [payment_status, setPayment_status] = useState('');
    const [price, setPrice] = useState('');

    const [price_list_id, setPrice_list_id] = useState('');
    const [makeupName, setMakeupName] = useState('');

    const [status, setStatus] = useState('');
    const [time_try_customer, setTime_try_customer] = useState('');


    const [submit, setSubmit] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false); // Add state to manage editing mode
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        console.log(item);
        if (item?.item) {
            setId(item.item.id || '')
            setEmail(item.item.email || '')
            setPhone_number(item.item.phone_number || '')
            setAlbums_id(item.item.albums_id || '')
            setRoom_id(item.item.room_id || '')
            setBooking_time(item.item.booking_time || '')
            setCostume_id(item.item.costume_id || '')
            setEquipment_id(item.item.equipment_id || '')
            setLocations_id(item.item.locations_id || '')
            setLocation(item.item.location || '')
            setMessenger(item.item.messenger || '')
            setPayment_status(item.item.payment_status | '')
            setPrice(item.item.price || '')
            setPrice_list_id(item.item.price_list_id || '')
            setStatus(item.item.status || '')
            setTime_try_customer(item.item.time_try_customer || '')
        }
    }, [item]);

    useEffect(() => {
        const nameOf = async () => {
            if (costume_id !== '') {
                const nameOfCostume = await CostumesApi.getAllCostumerById(costume_id)
                setCostumeName(nameOfCostume.name)
            }
            else {
                setCostumeName("Không thuê trang phục")
            }
            if (equipment_id !== '') {
                const nameOfEquipment = await EquipmentApi.getEquipmentById(equipment_id)
                setEquipmentName(nameOfEquipment.name)
            }
            else {
                setEquipmentName("Không thuê thiết bị")
            }
            if (locations_id !== '') {
                const nameOfLocation = await LocationApi.getLocationById(locations_id)
                setLocationName(nameOfLocation.name)
            }
            else {
                setLocationName("Khách hàng không chọn chụp ảnh bên ngoài")
            }
            if (price_list_id !== '') {
                const nameOfMakeup = await PriceApi.getPriceListtById(price_list_id)
                setMakeupName(nameOfMakeup.name)
            }
            else {
                setMakeupName("Khách hàng không thuê trang điểm")

            }
            if (room_id !== '') {
                const nameOfRoom = await RoomApi.getRoomById(room_id)
                setRoomName(nameOfRoom.name)
            }
            else {
                setRoomName("Khách hàng không thuê phòng chụp ảnh")
            }
        }
        nameOf()
    }, [costume_id, equipment_id, locations_id, price_list_id, room_id])

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
    };
    const notify = (message, type) => {
        const toastType = type === 'success' ? toast.success : toast.error;
        return toastType(message, {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    };

    const handleSubmit = async (id) => {
        try {
            const dataUpdate = await BookingApi.updateDate(auth.accessToken, booking_time, time_try_customer);
            //console.log(dataUpdate);
            if (dataUpdate.statusCode === 200) {
                notify("Sửa ngày thành công", 'success');
                setLoading(false);
                setIsEditing(false);
            } else {
                notify("Sửa ngày không thành công");
                setLoading(false);

            }
        } catch (error) {
            console.error('Error in fetchAdd:', error);
            setLoading(false);
        }
    };


    return (
        <>
            <ToastContainer />
            <div className='w-full'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <div className="card-body text-black">
                        <h2 className="card-title">Email khách hàng : {email} </h2>
                        <h2 className="card-title">Số điện thoại : {phone_number} VND</h2>

                        <p>Ngày Chụp :{formatDateTime(booking_time)} </p>
                        <p>Tên trang phục thuê :{costumeName} </p>
                        <p>Thời gian thử trang phục :{formatDateTime(time_try_customer)} </p>

                        <p>Tên phòng chụp hình  :{roomName} </p>
                        <p>Tên địa điểm muốn chụp :{locationName} </p>
                        <p>Tên gói makeUp:{makeupName} </p>

                        {/* <p>Vị trí chụp :{location} </p>
                        <p style={{ whiteSpace: 'pre-line' }}>Mô tả  :{description} </p>
                        <p style={{ whiteSpace: 'pre-line' }}>Khách hàng nhận được :{additional_info} </p> */}
                        <div className="card-actions justify-end">
                            <button onClick={handleEditClick} className="btn btn-primary">Chỉnh Sửa</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default EditBooking
