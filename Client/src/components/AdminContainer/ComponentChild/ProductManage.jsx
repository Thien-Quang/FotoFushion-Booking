import { Avatar, Form, Input, InputNumber, Modal, Select, Space, Table, Tabs, Upload } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import Temp from '../../../utils/temp';
import Button from '../../helples/button';
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Search from 'antd/es/input/Search';
import { Editor } from '@tinymce/tinymce-react';
const ProductManage = () => {
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
            title: 'HÌNH ẢNH',
            dataIndex: 'avatar',
            key: 'avatar',
            width: 120,
            height: 80,
            align: 'center',
            render: (avatar, data) => <Avatar src={avatar ?? ''} />
        },
        {
            title: 'TÊN SẢN PHẨM',
            dataIndex: 'username',
            key: 'name',
            width: 320,
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'DANH MỤC',
            dataIndex: 'phone',
            width: 130,
            key: 'number',
        },
        {
            title: 'GIÁ TIỀN',
            dataIndex: 'phone',
            align: 'right',
            width: 130,
            key: 'phone',
        },
        {
            title: 'ĐÃ BÁN',
            dataIndex: 'number',
            align: 'right',
            width: 130,
            key: 'number',
        },
        {
            title: 'SỐ LƯỢNG',
            dataIndex: 'number',
            align: 'right',
            width: 130,
            key: 'number',
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

    const [open, setOpen] = useState();

    function onSubmit() {

    }
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    function handleOk() {

    }
    return (
        <>
            <div class='bg-white w-full p-3  rounded-lg '>
                <Button type="primary" onClick={() => setOpen(true)}>
                    Thêm sản phẩm
                </Button>
                <Tabs
                    defaultActiveKey="1"
                    items={items}
                    onChange={onChange}
                />
            </div>

            <Modal
                title="Tạo sản phẩm"
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                layout="vertical"
                width={800}
                footer={[]}
            >
                <Form
                    labelCol={{
                        span: 6,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    layout='vertical'
                    style={{ width: '100%' }}
                >

                    <Form.Item valuePropName="fileList" getValueFromEvent={normFile}>
                        <Upload action="/upload.do" listType="picture-card">
                            <div>
                                <PlusOutlined />
                                <div
                                    style={{
                                        marginTop: 8,
                                    }}
                                >
                                    Upload
                                </div>
                            </div>
                        </Upload>
                    </Form.Item>


                    <Form.Item label="Tên sản phẩm" class='w-full'>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Mô tả sản phẩm" class='w-full'>
                        <Editor
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue="<p>This is the initial content of the editor.</p>"
                            init={{
                                height: 200,
                                menubar: false,
                                plugins: [
                                    'advlist autolink lists link image charmap print preview anchor',
                                    'searchreplace visualblocks code fullscreen',
                                    'insertdatetime media table paste code help wordcount'
                                ],
                                toolbar: 'undo redo | formatselect | ' +
                                    'bold italic backcolor | alignleft aligncenter ' +
                                    'alignright alignjustify | bullist numlist outdent indent | ' +
                                    'removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                    </Form.Item>

                    <Form.Item label="Danh mục sản phẩm">
                        <Select />
                    </Form.Item>
                    <Form.Item label="Mô tả sản phẩm">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Số lượng sản phẩm">
                        <InputNumber />
                    </Form.Item>
                    <Form.Item label="Giá sản phẩm">
                        <InputNumber />
                    </Form.Item>
                    <div class='flex flex-row justify-end'>
                        <Button key="submit" type="primary" onClick={()=> setOpen(false) }>
                            Hủy
                        </Button>,
                        <Button key="submit" type="primary" onClick={handleOk}>
                            Lưu
                        </Button>,
                    </div>
                </Form>
            </Modal>
        </>
    );
};

export default ProductManage;