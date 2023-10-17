const express = require('express');
const router = express.Router();
const { getAllComments, getCommentById, createNewComment, updateCommentById, deleteCommentById } = require('../controllers/comment_controllers');

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllComments', getAllComments);
router.get('/api/getCommentById/:id', getCommentById);
router.post('/api/createNewComment', createNewComment);
router.put('/api/updateCommentById/:id', updateCommentById);
router.delete('/api/deleteCommentById/:id', deleteCommentById);

module.exports = router;
