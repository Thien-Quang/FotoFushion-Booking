import { Avatar, Select, Space, Table, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import Temp from '../../../utils/temp';
import Button from '../../helples/button';
import Search from 'antd/es/input/Search';

const AccountUser = () => {
    const [userList, setUserList] = useState();
    async function fetchDataUser(type = 1) {
        // gọi api và lấy reponse chứa danh sách data tương tự như sau
        setUserList(Temp.dataUser)
    }

    useEffect(() => {
        fetchDataUser(1);
    }, [])
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
            title: 'Hình đại diện',
            dataIndex: 'avatar',
            key: 'avatar',
            width: 120,
            height: 80,
            align: 'center',
            render: (avatar, data) => <Avatar src={avatar ?? ''} />
        },
        {
            title: 'Tên tài khoản',
            dataIndex: 'username',
            key: 'name',
            width: 320,
        },
        {
            title: 'SĐT',
            dataIndex: 'phone',
            width: 130,
            key: 'phone',
        },
        {
            title: 'Loại đăng nhập',
            key: 'loginTypeGG',
            width: 230,
            dataIndex: 'loginTypeGG',
            align: 'center',
            render: (type, data) => {
                return type ? "Google" : "Mặc định";
            }
        },
        {
            title: "Thao tác",
            key: "action",
            align: 'center',
            width: 320,
            render: (_, record) => (
                <Space>
                    <Button type='primary'
                        onClick={() => onDeleteFiledHandler(record?.id)}
                    >
                        Xem chi tiết
                    </Button>
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
                        dataSource={userList ?? []}
                        pagination={{
                            pageSize: 10,
                        }}
                    />
                </>
        },
        {
            key: '2',
            label: 'Đang hoạt động',
            children:
                <>
                    <Search
                        style={{ margin: '10px 0px' }}
                        placeholder='TÌm kiếm theo tên'
                    />
                    <Table
                        columns={columns}
                        dataSource={userList ?? []}
                        pagination={{
                            pageSize: 10,
                        }}
                    />
                </>
        },
        {
            key: '3',
            label: 'Đã bị khóa',
            children:
                <>
                    <Search
                        style={{ margin: '10px 0px' }}
                        placeholder='TÌm kiếm theo tên'
                    />
                    <Table
                        columns={columns}
                        dataSource={userList ?? []}
                        pagination={{
                            pageSize: 10,
                        }}
                    />
                </>
        },
    ];


    function onDeleteFiledHandler() {

    }
    function onUpdateCategory() {

    }

    const onChange = (key) => {
        console.log(key);
        fetchDataUser(key);
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

export default AccountUser;