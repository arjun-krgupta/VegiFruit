
import {Route,Routes,BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer'
import About from './Components/About/About'
import SignUp from './Components/Signup/SignUp'
import Login from './Components/Login/Login'
import Contact from './Components/Contact/Contact'
import Forget from './Components/Forget/Forget';
import Service from './Components/Services/Service';
import NotFound from '../src/Components/NotFound'
import HomeContainer from './Container/HomeContainer';
import NavbarContainer from './Container/NavbarContainer';
import VegiContainer from './Container/VegiContainer';
import FruitContainer from './Container/FruitContainer';
import Cart from './Components/Cart';

function App(props) {
    return (
        <>
        <BrowserRouter>
        <NavbarContainer/>
        <Routes>
         <Route path='/' element={<HomeContainer/>}  />
         <Route path='/about' element={<About/>} />
         <Route path='/fruit' element={<FruitContainer/>} />
         <Route path='/vegetable' element={<VegiContainer/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/forget' element={<Forget/>} />
         <Route path='/service' element={<Service/>} />
         <Route path='/cart' element={<Cart/>} />
         <Route path='*' element={<NotFound/>} />
         <Route path='/signup' element={<SignUp/>} />
         <Route path='/login' element={<Login/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
        
        </>
    );
}

export default App;