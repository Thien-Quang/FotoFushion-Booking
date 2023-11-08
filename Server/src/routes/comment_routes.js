const express = require('express');
const router = express.Router();
const { getAllComments, getCommentById, createNewComment, updateCommentById, deleteCommentById } = require('../controllers/comment_controllers');
const { verifyToken, isAdminSystem } = require('../middlewares/verifyToken')

// router.use(verifyToken)

// Định tuyến các yêu cầu tới controller
router.get('/api/getAllComments', verifyToken, getAllComments);
router.get('/api/getCommentById/:id', verifyToken, getCommentById);
router.post('/api/createNewComment', verifyToken, createNewComment);
router.put('/api/updateCommentById/:id', verifyToken, updateCommentById);
router.delete('/api/deleteCommentById/:id', verifyToken, deleteCommentById);

module.exports = router;
