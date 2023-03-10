import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import SignupAsCustomer from './pages/SignupAsCustomer'
import LoginAsCustomer from './pages/LoginAsCustomer'
import LoginAsEmployee from './pages/LoginAsEmployee'
import SignupAsEmployee from './pages/SignupAsEmployee'
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About />}/>
            <Route path='contact' element={<Contact />}/>
            <Route path='store' element={<OurStore />}/>
            <Route path='login' element={<Login />}/>
            <Route path='forgot-password' element={<Forgotpassword />}/>
            <Route path='signupascustomer' element={<SignupAsCustomer />}/>
            <Route path='loginascustomer' element={<LoginAsCustomer />}/>
            <Route path='loginasemployee' element={<LoginAsEmployee />}/>
            <Route path='signupasemployee' element={<SignupAsEmployee />}/>
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
