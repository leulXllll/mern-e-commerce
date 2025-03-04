import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import allApi from './common';
import { useEffect } from 'react';
import axios from 'axios';
import Context from './context/index';

function App() {

  async function fetchUserDetails(){

    try {
      console.log('request made to user detail');

      let response = await axios.get(allApi.current_user.url, { withCredentials: true });

      console.log('data is ',response.data);

      return response.data.data;

    }catch(err) {
      console.log('some error happed here');

      console.log(err.message);
    }
  }
  useEffect(() => {
    /*user details*/

    fetchUserDetails();

  }, []);
  return (
    <>
        <Context.Provider value={{fetchUserDetails}}>
        <ToastContainer />

          <Header />
          <main className='min-h-[calc(100vh-120px)]'>
            <Outlet />
          </main>
          <Footer />
        </Context.Provider>

    </>
  )
}

export default App
