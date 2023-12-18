import { Avatar, Badge, Select, Space, Table, Tabs, Tag } from 'antd';
import React, { useEffect, useState } from 'react';
import Temp from '../../../utils/temp';
import Button from '../../helples/button';
import Search from 'antd/es/input/Search';

const OrderManage = () => {
    const columns = [
        {
            title: 'ID',
            width: 120,
            dataIndex: 'key',
            key: 'key',
            fixed: 'left',
            render: (text) => text,
        },
        {
            title: 'SẢN PHẨM',
            dataIndex: 'avatar',
            key: 'avatar',
            width: 120,
            height: 80,
            align: 'center',
            render: (avatar, data) => <Avatar src={avatar ?? ''} />
        },
        {
            title: 'KHÁCH HÀNG',
            dataIndex: 'username',
            key: 'name',
            align: 'center',
            width: 130,
            // render: (text) => <a>{text}</a>,
            render: (avatar, data) => <Avatar src={avatar ?? ''} />
        },
        {
            title: 'CỬA HÀNG',
            dataIndex: 'username',
            width: 120,
            key: 'username',
        },
        {
            title: 'ĐỊA CHỈ',
            dataIndex: 'phone',
            align: 'left',
            width: 180,
            key: 'phone',
        },
        {
            title: 'SỐ LƯỢNG',
            dataIndex: 'number',
            align: 'right',
            width: 130,
            key: 'number',
        },
        {
            title: 'TỔNG GIÁ TIỀN',
            dataIndex: 'number',
            align: 'right',
            width: 130,
            key: 'number',
        },
        {
            title: "TRẠNG THÁI",
            key: "status",
            align: "center",
            width: 150,
            render: (text, data) =>
                (data.status === 2) ? (
                    <Badge status="success" text="Hoàn thành" />
                ) : data.status === 1 ? (
                    <Badge status="warning" text="Chờ xác nhận" />
                ) : null,
        },
        {
            title: "NGÀY ĐẶT",
            key: "date",
            dataIndex: "date",
            align: "left",
            // render: (text, data) => <div>{getDate(data?.date)}</div>,
            render: (text, data) => <div>{text}</div>,
        },
        {
            title: "THANH TOÁN",
            key: "status",
            align: "center",
            width: 150,
            render: (text, data) =>
                (data.status === 2) ? (
                    <Badge status="success" text="Đã thanh toán" />
                ) : data.status === 1 ? (
                    <Badge status="warning" text="Chưa thanh toán" />
                ) : null,
        },
        {
            title: "Thao tác",
            key: "action",
            align: 'center',
            width: 320,
            render: (_, record) => (
                <Space>
                    <button type='primary'
                        onClick={() => onViewAccount(record?.id)}
                    >
                        Xem chi tiết
                    </button>
                    <Button
                        onClick={() => onDeleteFiledHandler(record?.id)}
                    >
                        Xóa
                    </Button>
                    <Button
                        onClick={() => onUpdateCategory(record)}
                    >
                        Cập nhật
                    </Button>
                </Space>
            ),
        },
    ];


    const [productList, setProductList] = useState();
    const [tab, setTab] = useState(1);
    async function fetchDataProducts(keyWord) {
        //  truyen tab + keyword vào api và trả lại  reponse chứa danh sách data tương tự như sau
        try {
            // const response = await DEMO GetProductList(tab,keyWord)
            setProductList(Temp.dataUser)
        } catch (error) {
            console.log("🚀 ~ file: ProductManage.jsx:14 ~ fetchDataUser ~ error:", error)
        }
    }
    useEffect(() => {
        fetchDataProducts(1);
    }, [])

    const items = [
        {
            key: '1',
            label: 'Tất cả',
            children:
                <>
                    <Search
                        style={{ margin: '10px 0px' }}
                        placeholder='TÌm kiếm theo tên'
                    />
                    <Table
                        columns={columns}
                        dataSource={productList ?? []}
                        pagination={{
                            pageSize: 10,
                        }}
                    />
                </>
        },
        {
            key: '2',
            label: 'Chờ phê duyệt',
            children:
                <>
                    <Search
                        style={{ margin: '10px 0px' }}
                        placeholder='TÌm kiếm theo tên'
                    />
                    <Table
                        columns={columns}
                        dataSource={productList ?? []}
                        pagination={{
                            pageSize: 10,
                        }}
                    />
                </>
        },
        {
            key: '3',
            label: 'Đang hoạt động',
            children:
                <>
                    <Search
                        style={{ margin: '10px 0px' }}
                        placeholder='TÌm kiếm theo tên'
                    />
                    <Table
                        columns={columns}
                        dataSource={productList ?? []}
                        pagination={{
                            pageSize: 10,
                        }}
                    />
                </>
        },
        {
            key: '4',
            label: 'Đã bị hủy',
            children:
                <>
                    <Search
                        style={{ margin: '10px 0px' }}
                        placeholder='TÌm kiếm theo tên'
                    />
                    <Table
                        columns={columns}
                        dataSource={productList ?? []}
                        pagination={{
                            pageSize: 10,
                        }}
                    />
                </>
        },
    ];

    function onDeleteFiledHandler(value) {

    }
    function onUpdateCategory(value) {

    }
    function onViewAccount(value) {

    }

    const onChange = (key) => {
        console.log(key);
        setTab(key);
        fetchDataProducts(key);
        // khi thay doi tab thi truyền tham số vào api và api trả lại danh sách tài khoản phù hợp điều kiện 
    };
    return (
        <>
            <div class='bg-white w-full p-3  rounded-lg '>
                <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                />
            </div>
        </>
    );
};

export default OrderManage;