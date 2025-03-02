import LoginIcon from '../assets/user.gif';
import { FaEye ,  FaEyeSlash  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import allApi from '../common';
import {toast} from 'react-toastify';
import {useNavigate} from 'react-router-dom';

const Login = () => {

    const [userdata,setData] = useState({email:'',password:''});

    const [passwordToggle, setPasswordToggle] = useState(false);

    const navigate = useNavigate();

    const handlePasswordChange = ()=>{
           setPasswordToggle(!passwordToggle);
    }
    
    const handleChange = (e)=>{

        let newUserData = {...userdata,[e.target.name]:e.target.value} 
        setData(newUserData);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        try{
            console.log('user data is ',userdata);

        let response = await axios.post(allApi.signin.url,userdata,{withCredentials:true, headers:{
            'Content-Type':'application/json'
        }}); 
        if(response.data.success){
            toast.success('Logged in sueccesfully', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
                navigate('/');
                
        }

        }catch(err){

            if(err.response.data.error){
                toast.error(err.response.data.message, {
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

    }



    return ( 
        <section id="login">

            <div className="mx-auto container p-4">

            <div className="bg-white p-2 w-full max-w-md mx-auto rounded-2xl">

                <div className='w-10 bg-blue-500 rounded-2xl mx-auto'>
                    <img src={LoginIcon} alt="Login icon" />
                </div>
               <form action="" className='pt-5' onSubmit={handleSubmit}> 
                    <div className='grid h-20'>
                        <label htmlFor="">Email :</label>
                        <div className='bg-slate-200 p-2'>
                            <input value={userdata.email} onChange={handleChange} name='email' type='email' placeholder='enter your email' className='w-full h-full outline-none bg-transparent'></input>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Password :</label>
                        <div className='bg-slate-200 p-2 flex'>
                            <input value={userdata.password}  onChange={handleChange} name='password' type={(passwordToggle)?'text':'password'} placeholder='enter your password' className='w-full h-full outline-none bg-transparent'></input>
                            <div className='flex items-center'>
                            {
                               (passwordToggle)?<span onClick={handlePasswordChange} className='cursor-pointer'>
                                                 <FaEyeSlash/> 
                                            </span> :
                                            <span onClick={handlePasswordChange}>
                                                <FaEye/>
                                            </span>
                                     }     
                                  
                            </div>
                        </div>
                        <Link to={'/forgot-password'} className='text-sm text-blue-400 block w-fit ml-auto hover:underline  '>Forgot password?</Link>
                    </div>
                    <button className='bg-blue-600 p-2 rounded-full text-white w-full max-w-[150px] hover:bg-blue-700 hover:scale-110 transition-all block mx-auto'>Login</button>
               </form>

               <p className='text-sm'>Don't have an account ? <Link to={'/sign-up'} className='text-blue-400 '>Sign Up</Link></p>
            </div>
            </div>
        </section>
     );
}
 
export default Login;