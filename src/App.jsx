
import {Route,Routes,BrowserRouter } from 'react-router-dom';
import Footer from './Components/Footer'
import About from './Components/About/About'
import SignUp from './Components/Signup/SignUp'
import Login from './Components/Login/Login'
import Contact from './Components/Contact/Contact'
import Forget from './Components/Forget/Forget';
import Service from './Components/Services/Service';
import NotFound from './Components/NotFound'
import Home from './Components/Home/Home';
import Fruits from './Components/Fruits/Fruits'
import Navbar from './Components/Navbar/Navbar'
import Vegetable from './Components/Vegetable/Vegetable'
import Cart from './Components/Cart'

function App(props) {
    return (
        <>
        <BrowserRouter>
        <Navbar/>
        <Routes>
         <Route path='/' element={<Home/>}  />
         <Route path='/about' element={<About/>} />
         <Route path='/fruit' element={<Fruits />} />
         <Route path='/vegetable' element={<Vegetable/>} />
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