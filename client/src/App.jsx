import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

function App() {
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
