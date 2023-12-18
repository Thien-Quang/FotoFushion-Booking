import React, { useState } from 'react';
import LoginBG from '../../assets/images/login-bg.png'
import VectaryTexture from '../../assets/images/VectaryTexture.png'
import Vectary from '../../assets/images/Vectary.png'
import './Login.scss'
import { Form } from 'antd';
import { EyeTwoTone, EyeInvisibleTwoTone } from '@ant-design/icons';
import useWindowSize from '../../hook/use-window-size';
import { useLocation, useNavigate } from 'react-router-dom';
const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { width, height } = useWindowSize();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    function onSubmit() {
        console.log(email)
        console.log(password)
        navigate("/");
    }
    function linkToSignup() {
        navigate("/signup");
    }
    function linkToForgotPass() {
        navigate("/forgotpassword");
    }
    return (
        <div className='mainLogin' style={{ width: width, height: height, objectFit: 'cover' }}>
            <img className='bgContainerLogin' style={{ width: width, height: height }} src={LoginBG} alt={'loginbg'} />
            <div className='loginContainer'>
                <h1 style={{padding: '20px 0px'}} >Đăng nhập</h1>
                <div className='loginForm'>
                    <form form={form} style={{ maxWidth: 365 }} >
                        <span>Email</span>
                        <input
                            className='inputEmail'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='fotofusion@gmail.com'
                        />

                        <span style={{ marginTop: 20 }}>Mật khẩu</span>
                        <div className='passwordInput'>
                            <input
                                style={{ width: '80%' }}
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button type='button' className='buttonPw' onClick={togglePasswordVisibility}>
                                {showPassword ? <EyeTwoTone /> : <EyeInvisibleTwoTone />}
                            </button>
                        </div>
                        <div className='forgotPassword'>
                            <span className='forgotPass' onClick={linkToForgotPass}> Quên mật khẩu</span>
                        </div>
                        <button className='btnSubmit' onClick={onSubmit} type="button">Đăng nhập</button>
                        <button className='btnSubmit' onClick={linkToSignup} type="button">Đăng ký</button>
                        <div class='flex items-center justify-center'>
                            <span className='Or'>Hoặc</span>
                        </div>

                        <div className="google-btn">
                            <div className="google-icon-wrapper">
                                <img className="google-icon" src="https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951" />
                            </div>
                            <p className="btn-text"><b>Đăng nhập với google</b></p>
                        </div>
                    </form>
                </div>
            </div>

            <div className='imageContainer'>
                <img className='imgPeople' src={Vectary} />
                <img className='imgEarth' src={VectaryTexture} />
                <div className='text'>
                    <span className='text1'>Portrait</span>
                    <span className='text2'>
                        <p>[</p>

                        <p className='text2-2'>
                            FOTOFUSION Photo
                        </p>

                        <p>]</p>
                    </span>
                    <span className='text1'>Design</span>
                </div>
            </div>
        </div>
    );
};

export default Login;