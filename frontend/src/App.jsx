
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
import PrivateComponent from './Components/PrivateComponent';

function App(props) {
    return (
        <>
        <Navbar/>
        <Routes>
        <Route element={<PrivateComponent/>}>
         <Route path='/' element={<Home/>}  />
         <Route path='/about' element={<About/>} />
         <Route path='/fruit' element={<Fruits/>} />
         <Route path='/vegetable' element={<Vegetable/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/forget' element={<Forget/>} />
         <Route path='/service' element={<Service/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='*' element={<NotFound/>} />
         </Route>
         <Route path='/signup' element={<SignUp/>} />
         <Route path='/login' element={<Login/>} />
        </Routes>
        <Footer/>
        
        </>
    );
}

export default App;