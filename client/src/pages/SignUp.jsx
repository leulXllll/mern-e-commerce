import LoginIcon from '../assets/user.gif'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { data, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UseFormInput from '../hooks/UseFormInput'
import { imageToBase64Converter } from '../helpers/imageToBase64';
import useSubmit from '../hooks/useSubmit';
import allApi from '../common/index.js';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const SignUp = () => {

    const navigate = useNavigate();

    const [userData, setData] = useState({ name: '', email: '', password: '', profilePic: '' });

    const [confirmPassword, setConfirm] = useState('');

    const [passwordToggle, setPasswordToggle] = useState(false);

    // if (data) {
    //     console.log(data.success);

    //     toast.success('🦄 Wow so easy!', {
    //         position: "top-center",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: false,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light"
    //     });
    // }

    const handlePasswordChange = () => {

        setPasswordToggle(!passwordToggle);
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log('submit called');

        if (confirmPassword === userData.password) {


            try {

                let response = await axios.post(allApi.signup.url, userData, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response.data);

                if (response.data.success) {
                    toast.success('Signed up successfully', {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    navigate('/login');
                }

            }catch(err) {

                let data = err?.response?.data;      

                if (data.error) {

                    toast.error(data.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });

                }
            }
        } else {
            toast.error('Please Confirm your password', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }
    const handlePicSubmit = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];

        const convertedFile = await imageToBase64Converter(file);

        let newData = { ...userData, [userData.profilePic]: convertedFile }
        setData(newData);

    }

    const handleChange = (e) => {

        let newValue = { ...userData, [e.target.name]: e.target.value };

        console.log('new value is ', newValue);

        setData(newValue);

    }
    const confirmPasswordChange = (e) => {
        setConfirm(e.target.value);
    }

    return (
        <div>
            <section id="signup">

                <div className="mx-auto container p-4">

                    <div className="bg-white p-2 w-full max-w-md mx-auto rounded-2xl">

                        <div className='w-20 h-15 bg-blue-500 rounded-2xl mx-auto relative overflow-hidden'>
                            <div className='flex justify-center items-center'>
                                <img src={userData.profilePic || LoginIcon} alt="Login icon" />
                            </div>
                            <form onChange={handlePicSubmit} value={userData.profilePic} className='text-xs absolute bottom-0 left-0 bg-slate-400 p-0.5 rounded-b-full w-100 opacity-70' >
                                <label htmlFor="typeFile" className=''>
                                    Upload Photo
                                </label>
                                <input type="file" id='typeFile' className='cursor-pointer hidden' />
                            </form>
                        </div>

                        <form action="" className='pt-5 flex flex-col gap-2' onSubmit={handleSubmit}>
                            <div className='grid h-75'>
                                <label htmlFor="">Name:</label>
                                <div className='bg-slate-200 p-2'>
                                    <input value={userData.name} name='name' onChange={handleChange} type='text' placeholder='enter your name' required className='w-full h-full outline-none bg-transparent'></input>
                                </div>
                                <label htmlFor="">Email :</label>
                                <div className='bg-slate-200 p-2'>
                                    <input value={userData.email} name='email' onChange={handleChange} required type='email' placeholder='enter your email' className='w-full h-full outline-none bg-transparent'></input>
                                </div>
                                <label htmlFor="">Password :</label>
                                <div className='bg-slate-200 p-2 flex'>
                                    <input value={userData.password} name='password'
                                        onChange={handleChange} required type={(passwordToggle) ? 'text' : 'password'} placeholder='enter your password' className='w-full h-full outline-none bg-transparent'></input>
                                    <div className='flex items-center'>
                                        {
                                            (passwordToggle) ? <span onClick={handlePasswordChange} className='cursor-pointer'>
                                                <FaEyeSlash />
                                            </span> :
                                                <span onClick={handlePasswordChange}>
                                                    <FaEye />
                                                </span>
                                        }
                                    </div>
                                </div>
                                <label htmlFor="">Confirm Password :</label>
                                <div className='bg-slate-200 p-2 flex'>
                                    <input value={confirmPassword} onChange={confirmPasswordChange} name='confirmPassword' required placeholder='confirm your password' className='w-full h-full outline-none bg-transparent'></input>
                                </div>
                            </div>
                            <button className='bg-blue-600 p-2 m-2 rounded-full text-white w-full max-w-[150px] hover:bg-blue-700 hover:scale-110 transition-all block mx-auto'>Sign Up</button>
                        </form>
                        <p className='text-sm'>Already have an account ? <Link to={'/login'} className='text-blue-400 '>Login</Link></p>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default SignUp;