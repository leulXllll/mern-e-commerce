import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import allApi from './common';
import {useEffect} from'react';
import axios from 'axios';

function App() {

  async function fetchUserDetails(){
    try{
       let data = await axios.get(allApi.current_user.url,{withCredentials:true});

      console.log(data);

    }catch(err){
      console.log(err.message);
    }
  }
  useEffect(() => {
    /*user details*/

      fetchUserDetails();

  }, []);
  return (
    <>
      <div >
        <ToastContainer />
        <Header />
        <main className='min-h-[calc(100vh-120px)]'>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
