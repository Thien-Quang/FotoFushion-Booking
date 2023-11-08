const express = require('express');
const {
    login,
    register,
    refreshTokenCrl,
    logout,
    //forgotPassword,
    resetPassword
} = require('../controllers/Auth');

const router = express.Router();

router.post('/api/auth/register', register);
router.post('/api/auth/login', login);

router.post('/api/auth/logout', logout);
router.post('/api/auth/refresh-token', refreshTokenCrl);
//router.post('/social-login', socialLogin, socialLoginUpdateInfo, createToken);

module.exports = router;