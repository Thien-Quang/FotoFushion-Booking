import React, { useEffect, useState } from 'react';
import { Layout, Menu, Button, Space, Avatar } from "antd";
import { useNavigate, useParams } from 'react-router-dom';
import Title from "antd/es/typography/Title";
import IcLogoAdmin from '../../assets/logo/icLogoAdmin';
import AccountManage from './ComponentChild/AccountManage';
import AccountUser from './ComponentChild/AccountUser';
import ProductManage from './ComponentChild/ProductManage';
import OrderManage from './ComponentChild/OrderManage';
import CalendarManager from './ComponentChild/CalendarPage';


const { Sider } = Layout;
const AdminHomeContainer = () => {
    const [selectedMenuItem, setSelectedMenuItem] = useState(1);
    const navigate = useNavigate();
    const handleMenuClick = (e) => {
        setSelectedMenuItem(e.key);
    };
    const logoutHandler = () => {
        console.log('logout');
        // localStorage.removeItem("user");
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("refreshToken");
        // navigate("../login");
    }

    return (
        <div class='pt-[96px] ' >
            <Layout theme="dark" class='flex flex-col items-start justify-start' style={{ minHeight: 996 }} >
                <div class='flex w-full'>
                    <Sider theme="dark"  >
                        <Menu
                            theme="dark"
                            style={{ height: '100%' }}
                            // selectedKeys={[selectedMenuItem]}
                            onClick={handleMenuClick}
                            mode="inline"
                        >
                            <Space.Compact class='w-full' align="center" direction="vertical" >
                                {/* <Avatar src={icLogoAdmin}> */}
                                <IcLogoAdmin />

                                <Title level={3}>
                                    <span class='text-white bold' >{'FutoFusion'} </span>
                                </Title>
                            </Space.Compact>

                            <Menu.Item key="1">Quản lý tài khoản</Menu.Item>
                            <Menu.Item key="2">Quản lý người dùng</Menu.Item>
                            <Menu.Item key="3">Quản lý sản phẩm</Menu.Item>
                            <Menu.Item key="4">Quản lý đơn hàng </Menu.Item>
                            <Menu.Item key="5">Quản lý lịch chụp</Menu.Item>
                            <button
                                onClick={logoutHandler}
                                class="w-4/5 h-10 border-stone-50 border-2 bg-black mx-5 mt-20 text-white hover:bg-white hover:text-btnprimary font-bold py-2 px-4 rounded-full"
                            >Đăng xuất</button>
                        </Menu>
                    </Sider>
                    <Layout
                        class='p-2 w-full'
                    >
                        <Layout.Content>
                            {selectedMenuItem === "1" && <AccountManage />}
                            {selectedMenuItem === "2" && <AccountUser />}
                            {selectedMenuItem === "3" && <ProductManage />}
                            {selectedMenuItem === "4" && <OrderManage />}
                            {selectedMenuItem === "5" && <CalendarManager />}
                        </Layout.Content>
                    </Layout>
                </div>

            </Layout>
        </div>
    );
};

export default AdminHomeContainer;