import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOder from './pages/PlaceOder/PlaceOder';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';
import Verify from './pages/verify/Verify';
import MyOrders from './pages/MyOders/MyOrders';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
const [showLogin,setShowLogin]=useState(false)
  return (
  <>
  {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className='app'>
       <Navbar setShowLogin={setShowLogin}/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/oder' element={<PlaceOder/>}></Route>
        <Route path='/verify' element={<Verify/>}></Route>
        <Route path='/myorders' element={<MyOrders/>}></Route>
       </Routes>
      </div>
       <Footer/>
       <ToastContainer position='top-center' theme='colored' autoClose={3000}/>
  </>
  )
}

export default App
