import React from 'react';
import './bookingonline.scss'
import BookingBG from '../../assets/images/booking-bg.png'
import FormBookingBG from '../../assets/images/formbooking-bg.png'

import { PlusOutlined } from '@ant-design/icons';
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Slider,
    Switch,
    TimePicker,
    TreeSelect,
    Upload,
} from 'antd';

import useWindowSize from '../Card/hook/use-window-size'
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const BookingOnline = () => {
    document.title = 'Booking';
    const { width, height } = useWindowSize();

    function handleChange(value) {
        console.log(`selected ${value}`);
    }
    return (
        <div className='bookingContainer'>
            <img src={BookingBG} style={{ width: width, height: height, objectFit: 'cover' }} />
            <span className='title'>
                <p>
                    Đặt Chụp Hình Online
                </p>
            </span>
            <div className='partBookingContainer '>
                {/* <div style={{ margin: '100px 0px', backgroundImage: `url(${FormBookingBG})`, backgroundSize: 'cover' }}> */}
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    className='formBooking'
                    style={{ width: '100%', minHeight: '900px', backgroundImage: `url(${FormBookingBG})`, backgroundSize: 'cover' }}
                >
                    <span className='titleForm'>Thông tin đăng ký</span>
                    <div className='mainForm'>
                        <Form.Item label="Tên HK">
                            <Input style={{ marginLeft: 40 }} placeholder='Nhập họ và tên' />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input style={{ marginLeft: 40 }} placeholder='fofofusion@gamil.com' />
                        </Form.Item>
                        <Form.Item label="Số điện thoại">
                            <Input style={{ marginLeft: 40 }} placeholder='+84' />
                        </Form.Item>
                        <Form.Item label="Ngày chụp">
                            <DatePicker style={{ marginLeft: 40 }} placeholder='Chọn ngày chụp' />
                        </Form.Item>
                        <Form.Item label="Thời gian">
                            <TimePicker.RangePicker style={{ marginLeft: 40 }} />
                        </Form.Item>
                        <Form.Item label="Thể loại">
                            <Select
                                defaultValue="1"
                                onChange={handleChange}
                                style={{ marginLeft: 40 }}
                                options={[
                                    { value: '1', label: 'Ảnh cưới' },
                                    { value: '2', label: 'Ảnh chân dung' },
                                    { value: '3', label: 'Ảnh phong cảnh' },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item label="Ngoại Cảnh">
                            <Select
                                defaultValue={'Ngoại Cảnh'}
                                onChange={handleChange}
                                style={{ marginLeft: 40 }}
                                options={[
                                    { value: '1', label: 'Ngoại Cảnh' },
                                    { value: '2', label: 'Ngoại Cảnh 2' },
                                    { value: '3', label: 'Ngoại Cảnh 3' },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item label="Địa Điểm">
                            <Select
                                defaultValue={'Chùa Linh Ứng, Sơn Trà'}
                                onChange={handleChange}
                                style={{ marginLeft: 40 }}
                                // style={{ marginLeft: 40, background: 'transparent' }} 
                                options={[
                                    { value: '1', label: 'Chùa Linh Ứng, Sơn Trà' },
                                    { value: '2', label: 'Ngoại Cảnh 2' },
                                    { value: '3', label: 'Ngoại Cảnh 3' },
                                ]}
                            />
                        </Form.Item>

                        <Form.Item label="Trang phục :">
                            <Radio.Group style={{ marginLeft: 40 }}  >
                                <Radio value="Thuê"> Thuê </Radio>
                                <Radio value="Mua"> Mua </Radio>
                            </Radio.Group>
                        </Form.Item>

                        <Form.Item label="Ngày thử">
                            <DatePicker style={{ marginLeft: 40 }} placeholder='Chọn ngày thử' />
                        </Form.Item>

                        <Form.Item label="Makup :" name="mackup" valuePropName="checked">
                            <Checkbox style={{ marginLeft: 40 }}  ></Checkbox>
                        </Form.Item>

                        <Form.Item style={{ width: '100%' }} >
                            <Button className='btnSubmit' type="primary" htmlType="submit">
                                Tiếp tục
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
                {/* </div> */}
            </div>

        </div >
    );
};

export default BookingOnline;