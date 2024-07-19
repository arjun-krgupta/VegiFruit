import React from 'react';
import {Route,Routes } from 'react-router-dom';
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer'
import Vegetable from './Components/Vegetable/Vegetable';
import Fruits from './Components/Fruits/Fruits'
import About from './Components/About/About'
import SignUp from './Components/Signup/SignUp'
import Login from './Components/Login/Login'
import Contact from './Components/Contact/Contact'
import Forget from './Components/Forget/Forget';
import Service from './Components/Services/Service';
import NotFound from '../src/Components/NotFound'
import Cart from './Components/Cart';
// import Slider from './Components/Slider';

function App(props) {
    return (
        <>
        <Navbar/>
        <Routes>
         <Route path='/' element={<Home/>} ></Route>
         <Route path='/about' element={<About/>}></Route>
         <Route path='/fruit' element={<Fruits/>}></Route>
         <Route path='/vegetable' element={<Vegetable/>}></Route>
         <Route path='/contact' element={<Contact/>}></Route>
         <Route path='/login' element={<Login/>}></Route>
         <Route path='/signup' element={<SignUp/>}></Route>
         <Route path='/forget' element={<Forget/>}></Route>
         <Route path='/service' element={<Service/>}></Route>
         <Route path='/cart' element={<Cart/>}></Route>
         <Route path='*' element={<NotFound/>}></Route>
         {/* <Route path='/slider' element={<Slider/>}></Route> */}
        </Routes>
        <Footer/>
        
        </>
    );
}

export default App;