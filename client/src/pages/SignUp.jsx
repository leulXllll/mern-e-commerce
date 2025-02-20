import LoginIcon from '../assets/user.gif'
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import UseFormInput from '../hooks/UseFormInput'
import { imageToBase64Converter } from '../helpers/imageToBase64';

const SignUp = () => {

    let name = UseFormInput('');
    let confirmpassword = UseFormInput('');
    let email = UseFormInput('');
    let password = UseFormInput('');

    let [profilePic,setProfilePic] = useState('');

    const [passwordToggle, setPasswordToggle] = useState(false);

    const handlePasswordChange = () => {

        setPasswordToggle(!passwordToggle);
    }

    const handleSubmit = (e ) => {

        e.preventDefault();
    }
    const handlePicSubmit = async(e)=>{
        e.preventDefault();
        const file = e.target.files[0];

        const convertedFile = await imageToBase64Converter(file);
        setProfilePic(convertedFile);
    }
    return (
        <div>
            <section id="signup">

                <div className="mx-auto container p-4">

                    <div className="bg-white p-2 w-full max-w-md mx-auto rounded-2xl">

                        <div className='w-20 h-15 bg-blue-500 rounded-2xl mx-auto relative overflow-hidden'>
                            <div className='flex justify-center items-center'>
                                <img src={profilePic||LoginIcon} alt="Login icon" />
                            </div>
                            <form onChange={handlePicSubmit} className='text-xs absolute bottom-0 left-0 bg-slate-400 p-0.5 rounded-b-full w-100 opacity-70' >
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
                                    <input {...name} name='name' required type='text' placeholder='enter your name' className='w-full h-full outline-none bg-transparent'></input>
                                </div>
                                <label htmlFor="">Email :</label>
                                <div className='bg-slate-200 p-2'>
                                    <input {...email} name='email' required type='email' placeholder='enter your email' className='w-full h-full outline-none bg-transparent'></input>
                                </div>
                                <label htmlFor="">Password :</label>
                                <div className='bg-slate-200 p-2 flex'>
                                    <input {...password} name='password' required type={(passwordToggle) ? 'text' : 'password'} placeholder='enter your password' className='w-full h-full outline-none bg-transparent'></input>
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
                                    <input {...confirmpassword} name='password' required placeholder='confirm your password' className='w-full h-full outline-none bg-transparent'></input>
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