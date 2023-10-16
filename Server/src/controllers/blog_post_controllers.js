const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const BlogPostService = require('../services/blog_post_services');

// Lấy danh sách tất cả bài viết
const getAllBlogPosts = async (req, res) => {
    try {
        const blogPosts = await BlogPostService.getAllBlogPosts();
        res.json(blogPosts);
    } catch (error) {
        console.error('Lỗi khi lấy danh sách bài viết:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy danh sách bài viết.' });
    }
};

// Lấy thông tin bài viết bằng ID
const getBlogPostById = async (req, res) => {
    try {
        const id = req.params.id;
        const blogPost = await BlogPostService.getBlogPostById(id);
        if (!blogPost) {
            return res.status(404).json({ error: 'Không tìm thấy bài viết.' });
        }

        res.json(blogPost);
    } catch (error) {
        console.error('Lỗi khi lấy thông tin bài viết:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi lấy thông tin bài viết.' });
    }
};

// Tạo bài viết mới
const createNewBlogPost = async (req, res) => {
    try {
        const { title, content, author, date } = req.body;
        const id = uuidv4();
        const blogPostData = { id, title, content, author, date };
        const blogPost = await BlogPostService.createBlogPost(blogPostData);
        res.status(201).json(blogPost);
    } catch (error) {
        console.error('Lỗi khi tạo bài viết mới:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi tạo bài viết mới.' });
    }
};

// Cập nhật thông tin bài viết
const updateBlogPostById = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, content, author, date } = req.body;
        const blogPostData = { title, content, author, date };
        const updatedBlogPost = await BlogPostService.updateBlogPost(id, blogPostData);
        if (!updatedBlogPost) {
            return res.status(404).json({ error: 'Bài viết không tồn tại' });
        }

        res.json(updatedBlogPost);
    } catch (error) {
        console.error('Lỗi khi cập nhật bài viết:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi cập nhật bài viết.' });
    }
};
// Xóa bài viết
const deleteBlogPostById = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteResult = await BlogPostService.deleteBlogPost(id);

        if (!deleteResult) {
            return res.status(404).json({ error: 'Không tìm thấy bài viết.' });
        }

        res.sendStatus(204);
    } catch (error) {
        console.error('Lỗi khi xóa bài viết:', error);
        res.status(500).json({ error: 'Đã xảy ra lỗi khi xóa bài viết.' });
    }
};

module.exports = {
    getAllBlogPosts,
    getBlogPostById,
    createNewBlogPost,
    updateBlogPostById,
    deleteBlogPostById
};