import LoginIcon from '../assets/user.gif';
import { FaEye ,  FaEyeSlash  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import UseFormInput from '../hooks/UseFormInput';

const Login = () => {

    const email = UseFormInput('');
    const password = UseFormInput('');

    const [passwordToggle, setPasswordToggle] = useState(false);


    const handlePasswordChange = ()=>{
           setPasswordToggle(!passwordToggle);
    }
   

    const handleSubmit = ({e})=>{
        e.preventDefault();
        const {value} = email;

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
                            <input {...email} name='email' type='email' placeholder='enter your email' className='w-full h-full outline-none bg-transparent'></input>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Password :</label>
                        <div className='bg-slate-200 p-2 flex'>
                            <input {...password}  name='password' type={(passwordToggle)?'text':'password'} placeholder='enter your password' className='w-full h-full outline-none bg-transparent'></input>
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