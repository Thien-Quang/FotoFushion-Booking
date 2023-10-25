import React, { useState, useContext } from 'react';
import LoginBG from '../../assets/images/login-bg.png'
import VectaryTexture from '../../assets/images/VectaryTexture.png'
import Vectary from '../../assets/images/Vectary.png'
import './Login.scss'
import { Form } from 'antd';
import { EyeTwoTone, EyeInvisibleTwoTone } from '@ant-design/icons';
import useWindowSize from '../Card/hook/use-window-size'
import AuthContext from '../../context/authProvider';
import { useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { _, height } = useWindowSize();
    const { setIsLogin } = useContext(AuthContext);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    function onSubmit() {
        console.log(email);
        console.log(password);
        if (setIsLogin) {
            setIsLogin(true);
            navigate("/");
        } else {
            console.error("setIsLogin is not defined.");
        }
    }

    function linkToSignup() {
        navigate("/signup");
    }

    function linkToForgotPass() {
        navigate("/forgot-password");
    }
    return (

        <div className='mainLogin' style={{ height: height }}>
            <img className='bgContainerLogin' style={{ height: height }} src={LoginBG} alt={'loginbg'} />
            <div className='loginContainer'>
                <h1  >WELCOME FOTOFUSION! </h1>
                <div className='loginForm'>
                    <form form={form} style={{ maxWidth: 365 }} >
                        <span>Email</span>
                        <input
                            className='inputEmail'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='fotofusion@gmail.com'
                        />

                        <span style={{ marginTop: 20 }}>Password</span>
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
                            <span className='forgotPass' onClick={linkToForgotPass}> Forgot Password</span>
                        </div>
                        <button className='btnSubmit' onClick={onSubmit} type="button">Login</button>
                        <button className='btnSubmit' onClick={linkToSignup} type="button">Sign Up</button>
                        <span className='Or'>----------------Or----------------</span>

                        <div class="google-btn">
                            <div class="google-icon-wrapper">
                                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                            </div>
                            <p class="btn-text"><b>Sign in with google</b></p>
                        </div>

                        <svg xmlns="http://www.w3.org/2000/svg" width="360" height="2" viewBox="0 0 480 2" fill="none">
                            <path d="M0 1H480" stroke="#C8D3F9" stroke-width="2" />
                        </svg>
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