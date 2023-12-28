const express = require('express');

const { v4: uuidv4 } = require('uuid');
const BookingDetailService = require('../Services/booking_detail_services');

// Lấy danh sách tất cả chi tiết đặt hàng
const getAllBookingDetails = async (req, res) => {
    try {
        const bookingDetails = await BookingDetailService.getAllBookingDetails();
        res.json(bookingDetails);
    } catch (error) {
        console.error('Lỗi khi lấy danh sách chi tiết đặt hàng:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy danh sách chi tiết đặt hàng.' });
    }
};

// Lấy thông tin chi tiết đặt hàng bằng ID
const getBookingDetailById = async (req, res) => {
    try {
        const id = req.params.id;
        const bookingDetail = await BookingDetailService.getBookingDetailById(id);
        if (!bookingDetail) {
            return res.status(404).json({ error: 'Không tìm thấy chi tiết đặt hàng.' });
        }

        res.json(bookingDetail);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin chi tiết đặt hàng:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy thông tin chi tiết đặt hàng.' });
    }
};

// Tạo chi tiết đặt hàng mới
const createNewBookingDetail = async (req, res) => {
    try {
        // Lấy thông tin chi tiết đặt hàng từ request body
        const id = uuidv4();
        const inputData = req.body;
        const bookingDetailData = { id, ...inputData };

        // Gọi service để tạo chi tiết đặt hàng
        const bookingDetail = await BookingDetailService.createBookingDetail(bookingDetailData);

        // Trả về thông tin chi tiết đặt hàng vừa tạo
        res.status(201).json(bookingDetail);
    } catch (error) {
        console.error('Lỗi khi tạo chi tiết đặt hàng mới:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi tạo chi tiết đặt hàng mới.' });
    }
};

// Cập nhật thông tin chi tiết đặt hàng bằng ID
const updateBookingDetailById = async (req, res) => {
    try {
        const id = req.params.id;
        const inputData = req.body;
        const bookingDetailData = { id, ...inputData };

        // Gọi service để cập nhật chi tiết đặt hàng
        const updatedBookingDetail = await BookingDetailService.updateBookingDetail(id, bookingDetailData);

        if (!updatedBookingDetail) {
            return res.status(404).json({ error: 'Chi tiết đặt hàng không tồn tại' });
        }

        res.json(updatedBookingDetail);
    } catch (error) {
        console.error('Lỗi khi cập nhật chi tiết đặt hàng:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi cập nhật chi tiết đặt hàng.' });
    }
};

// Xóa chi tiết đặt hàng bằng ID
const deleteBookingDetailById = async (req, res) => {
    try {
        const id = req.params.id;

        // Gọi service để xóa chi tiết đặt hàng
        const deleteResult = await BookingDetailService.deleteBookingDetail(id);

        if (!deleteResult) {
            return res.status(404).json({ error: 'Không tìm thấy chi tiết đặt hàng.' });
        }

        res.sendStatus(204);
    } catch (error) {
        console.error('Lỗi khi xóa chi tiết đặt hàng:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa chi tiết đặt hàng.' });
    }
};


module.exports = {
    getAllBookingDetails,
    getBookingDetailById,
    createNewBookingDetail,
    updateBookingDetailById,
    deleteBookingDetailById
};
