import React, { Fragment } from "react";
import { icons } from "../../utils/icons";
import Button from "../helples/button";
import { statusOrderNavbarItem } from "../../utils/constant";
import ReactPaginate from "react-paginate";

const List = () => {
    const listOrders = []; // Replace with your own data source

    const handlePageChange = ({ selected }) => {
        // Implement your page change logic here
    };

    return (
        <Fragment>
            <div className="">
                <div className="h-full flex items-center justify-between bg-white p-2 rounded-sm mb-5 gap-2 shadow-md">
                    <ul className="grid grid-cols-6 w-full px-2 py-2">
                        {statusOrderNavbarItem.map((item, index) => {
                            return (
                                <li
                                    className="col-span-1 text-gray-500 font-bold"
                                    key={index}
                                >
                                    <span
                                        className={`py-1 px-2 cursor-pointer`}
                                    >
                                        {item.display}
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                {listOrders.length > 0 ? (
                    <div className="relative overflow-x-auto shadow-md rounded-sm bg-white">
                        <div className="p-2">
                            <div className="p-1 rounded-sm w-full flex items-center  border border-gray-300 ">
                                <span className="text-gray-400 px-4">
                                    <icons.FiSearch size={24} />
                                </span>
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm ..."
                                    className="outline-none flex-1 p-1 h-full w-full placeholder:text-sm bg-transparent text-gray-500 text-sm"
                                />
                            </div>
                        </div>
                        <table className="w-full text-sm text-left  text-gray-400 cursor-pointer">
                            <thead className="text-xs border-b  text-gray-700 uppercase bg-slate-200">
                                <tr>
                                    <th scope="col" className="px-3 py-3">
                                        ID
                                    </th>
                                    <th scope="col" className="px-3 py-3">
                                        sản phẩm
                                    </th>
                                    <th scope="col" className="px-3 py-3">
                                        Số lượng đặt
                                    </th>
                                    <th scope="col" className="px-3 py-3 text-center">
                                        Tổng Giá tiền
                                    </th>
                                    <th scope="col" className="px-3 py-3 text-center">
                                        Trạng thái
                                    </th>
                                    <th scope="col" className="px-3 py-3">
                                        Ngày đặt
                                    </th>
                                    <th scope="col" className="px-3 py-3">
                                        Thanh toán
                                    </th>
                                    <th scope="col" className="px-3 py-3 text-center">
                                        Thao tác
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {listOrders.length > 0 &&
                                    listOrders.map((order, index) => {
                                        return (
                                            <tr
                                                className="bg-white border-b hover:bg-gray-100 "
                                                key={index}
                                            >
                                                <td className="px-3 text-sm py-2 text-gray-500">
                                                    ... {order._id.slice(-4)}
                                                </td>
                                                <td className="px-3 text-sm py-2 text-gray-500">
                                                    <img
                                                        src={order.productId.imagePreview}
                                                        alt=""
                                                        className="h-10 w-10 rounded-md bg-slate-200 shadow-md"
                                                    />
                                                </td>
                                                <td className="px-3 text-sm py-2 text-gray-500">
                                                    {order.quantity}
                                                </td>
                                                <td className="px-3 text-sm py-2 text-gray-500">
                                                    {order.totalPrice} VND
                                                </td>
                                                <td className="px-3 text-sm py-2 text-gray-500">
                                                    {order.status}
                                                </td>
                                                <td className="px-3 py-2 text-gray-500 text-sm">
                                                    {order.createdAt}
                                                </td>
                                                <td className="px-3 py-2 text-gray-500 text-sm">
                                                    {order.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}
                                                </td>
                                                <td className=" text-sm py-2 text-gray-500 flex items-center gap-1 justify-center">
                                                    <div className="flex items-center gap-2">
                                                        <Button
                                                            className="bg-gray-200 text-xs px-2 hover:bg-slate-300"
                                                        // to="/orders/details/${order._id}"
                                                        >
                                                            Chi tiết
                                                        </Button>
                                                        <Button
                                                            className="bg-red-200 text-xs px-2 hover:bg-red-300"
                                                        // onClick={() => handleDelete(order._id)}
                                                        >
                                                            Xóa
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                        <ReactPaginate
                            previousLabel={<icons.FiChevronLeft size={20} />}
                            nextLabel={<icons.FiChevronRight size={20} />}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={10} // Replace with the actual total number of pages
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageChange}
                            containerClassName={"pagination justify-center"}
                            activeClassName={"active"}
                        />
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full">
                        <span className="text-gray-500">Không có đơn hàng nào</span>
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default List;