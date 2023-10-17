const express = require('express');
const router = express.Router();
const { getAllBlogPosts, getBlogPostById, createNewBlogPost, updateBlogPostById, deleteBlogPostById } = require('../controllers/blog_post_controllers');

// Định tuyến các yêu cầu tài khoản tới controller
router.get('/api/getAllBlogPosts', getAllBlogPosts);
router.get('/api/getBlogPostById/:id', getBlogPostById);
router.post('/api/createNewBlogPost', createNewBlogPost);
router.put('/api/updateBlogPostById/:id', updateBlogPostById);
router.delete('/api/deleteBlogPostById/:id', deleteBlogPostById);

module.exports = router;