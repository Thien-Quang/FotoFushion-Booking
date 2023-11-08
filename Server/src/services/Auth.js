const Account = require("../models/account_models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
//const sendMail = require("../utils/sendMail");
const crypto = require("crypto");
const { Op } = require("sequelize");


const register = async ({ email, password, phone_number }, res) => {
    try {
        const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
        const [account, created] = await Account.findOrCreate({
            where: { email },
            defaults: {
                //id: uuidv4(),
                email,
                password: hashPassword,
                role_id: "75ae40df-dd1a-4d49-be2f-b6c7af885b4c",
                phone_number,
            },
        });
        const status = created ? 201 : 409;
        return res.status(status).json({
            message: created ? "Register is successfully" : "Email is used",
        });
    } catch (error) {
        throw new Error(error);
    }
};

const login = async ({ email, password }, res) => {
    try {
        const account = await Account.findOne({
            where: { email },
        });
        const role = account && (await account.getRole());
        const isChecked = account && bcrypt.compareSync(password, account.password);

        const accessToken = isChecked
            && jwt.sign({ email: account.email, roleCode: role.code }, process.env.JWT_SECRET, { expiresIn: "2d" })
        const refreshToken = isChecked
            && jwt.sign({ email: account.email }, process.env.JWT_SECRET_REFRESH_TOKEN, { expiresIn: "7d" })

        if (refreshToken) {
            await Account.update({
                refreshToken: refreshToken
            }, {
                where: { email: account.email },
            })
        }
        res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 })

        const status = accessToken ? 200 : account ? 401 : 404;
        return res.status(status).json({
            message: accessToken ? "Login is successfully" : account ? "Password was incorrect" : "Email hasn't been registered",
            accessToken: accessToken ? accessToken : null
        });
    } catch (error) {
        throw new Error(error);
    }
};

const refreshToken = async (refreshToken, res) => {
    try {
        let response, status;
        const account = await Account.findOne({
            where: { refreshToken: refreshToken }
        })
        const role = account && (await account.getRole());
        if (account) {
            jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH_TOKEN, (error) => {
                if (error) {
                    return res.status(401).json({
                        message: "Refresh token has expired. Require login again",
                    });
                } else {
                    const accessToken = jwt.sign({ email: account.email, roleCode: role.code }, process.env.JWT_SECRET, { expiresIn: "5d" })
                    status = accessToken ? 200 : 500;
                    response = {
                        message: accessToken ? "Generate access token successfully" : "Fail to generate new access token. Let's try more time",
                        'newAccessToken': accessToken ? accessToken : null,
                    }
                }
            })
        }
        return res.status(status).json(response);
    } catch (error) {
        throw new Error(error);
    }
};

const logout = async (refreshToken, res) => {
    // Delete refresh token in db
    await Account.update({ refreshToken: '' }, {
        where: {
            refreshToken: refreshToken
        }
    })
    // Delete refresh token in cookie browser
    res.clearCookie('refreshToken', {
        httpOnly: true,
        secure: true
    })
    return {
        success: true,
        mes: 'Logout is done'
    }
}

// const forgotPassword = async (email, res) => {
//     try {
//         const account = await Account.findOne({
//             where: { email: email }
//         })
//         if (!account) {
//             console.log(account);
//             return res.status(404).json({
//                 message: "Email hasn't been registered"
//             });
//         }

//         const otp = Math.floor(100000 + Math.random() * 900000).toString();
//         const resetExpires = Date.now() + 5 * 60 * 1000;
//         await Account.update({
//             resetExpires: resetExpires,
//             otpCode: otp
//         }, {
//             where: { email: email }
//         })

//         const html = `
//           <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
//         <div style="margin:50px auto;width:70%;padding:20px 0">
//           <div style="border-bottom:1px solid #eee">
//             <a href="" style="display:block;font-size:1.9em;color: #7fad39;text-decoration:none;font-weight:600;text-align:center">GreenEco</a>
//           </div>
//           <p style="font-size:1.1em">Hi, ${account.fullname}</p>
//           <p>Thank you for choosing GreenEco website. Please get the OTP below to reset your password. This OTP will expire 5 minutes from now.</p>
//           <h2 style="background: #7fad39;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
//           <p style="font-size:0.9em;">Regards,<br />GreenEco</p>
//           <hr style="border:none;border-top:1px solid #eee" />
//           <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
//             <p>GreenEco Inc</p>
//             <p>254, Nguyen Van Linh Street, Thanh Khue District, Da Nang City</p>
//             <p>Vietnam</p>
//           </div>
//         </div>
//       </div>
//     `
//         const rs = await sendMail({
//             email,
//             html,
//             subject: "Forgot password",
//         });
//         return res.status(200).json({
//             message: "Send to your email successfully",
//             otp: otp,
//         });
//     } catch (error) {
//         throw new Error(error);
//     }
// };

const resetPassword = async ({ password, otp }, res) => {
    try {
        const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8));
        const account = await Account.update({
            password: hashPassword,
            otpCode: null,
            resetExpires: null,
        }, {
            where: { otpCode: otp, resetExpires: { [Op.gt]: Date.now() } }
        })
        const status = account[0] === 1 ? 200 : 404;
        return res.status(status).json({
            message: account[0] === 1 ? "Reset password successfully" : "OTP code is incorrect or expired"
        });
    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    login,
    register,
    refreshToken,
    logout,
    //forgotPassword,
    resetPassword
};