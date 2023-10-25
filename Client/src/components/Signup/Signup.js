import React, { useState } from 'react';
import LoginBG from '../../assets/images/login-bg.png'
import VectaryTexture from '../../assets/images/VectaryTexture.png'
import Vectary from '../../assets/images/Vectary.png'
import './Signup.scss'
import { Form } from 'antd';
import { EyeTwoTone, EyeInvisibleTwoTone } from '@ant-design/icons';
import useWindowSize from '../Card/hook/use-window-size'

import { Link } from 'react-router-dom';
const SignUp = () => {
    const [form] = Form.useForm();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { _, height } = useWindowSize()

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    function onSubmit() {
        console.log(email)
        console.log(password)
    }
    return (
        <div className='mainLogin' style={{ height: height }}>
            <img className='bgContainerLogin' style={{ height: height }} src={LoginBG} alt={'loginbg'} />
            <div className='loginContainer'>
                <h1  >SIGN UP</h1>
                <div className='loginForm'>
                    <form
                        form={form}
                        style={{ maxWidth: 365 }}
                    >
                        <span>Email</span>
                        <input
                            className='inputEmail'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='fotofusion@gmail.com'
                        />

                        <span>Phone Number</span>
                        <input
                            className='inputEmail'
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder='+8423143233'
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

                        <span>Confirm Password</span>
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
                            <span className='forgotPass'> Already have an account?
                                <Link className='linkTO' to='/login'>
                                    Login Now
                                </Link>
                            </span>
                        </div>
                        <button className='btnSubmit' onClick={onSubmit} type="button">Sign Up</button>
                        <span className='Or'>----------------Or----------------</span>

                        <div class="google-btn">
                            <div class="google-icon-wrapper">
                                <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" />
                            </div>
                            <p class="btn-text"><b>Sign up with google</b></p>
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

export default SignUp;