import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Components/Assets/logo.png'

function Footer(props) {
    return (
    <>
    <div className='bg-[#508D4E] mt-10'>
    <div className="flex justify-around pt-4 gap-3 text-white mt-5">
        <div className="hidden sm:flex flex-col gap-1 w-64 lg:w-72">
            <h2 className='font-bold text-sm lg:text-xl'>About Us</h2>
            <p className=' text-justify text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus nobis ad animi dolore consequuntur eveniet harum voluptatibus quidem quibusdam!</p>
            <div className='w-24 h-auto lg:w-40'>
            <img src={logo} alt="" className='w-[100%]' />
            </div>
        </div>

        <div className="flex flex-col gap-2 w-48 md:w-56">
            <h2 className='font-bold text-sm lg:text-xl'>Contact info</h2>
            <p className='text-xs md:text-sm'>Address : New Ashok Nagar</p>
            <p className='text-xs md:text-sm'>Phone : +919318348275</p>
            <p className='text-xs md:text-sm'>Email : akarjun1050@gmail.com</p>
        </div>

            <div className="flex flex-col gap-1 w-16 md:w-20">
            <h2 className='font-bold text-sm lg:text-xl'>Links</h2>
            <Link to='/' className='hover:underline text-xs md:text-sm'>Home</Link>
            <Link to='/contact' className='hover:underline text-xs md:text-sm'>Contact us</Link>
            <Link to='/fruit' className='hover:underline text-xs md:text-sm'>Fruits</Link>
            <Link to='/vegetable' className='hover:underline text-xs md:text-sm'>Vegetables</Link>
        </div>

        <div className="hidden lg:flex flex-col gap-1 w-72">
            <h2 className='font-bold text-sm lg:text-xl'>News Letter</h2>
            <p className='text-justify text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus nobis ad animi dolore consequuntur eveniet harum voluptatibus quidem quibusdam!</p>
            <div>
            <input type="email" placeholder='Email Address' className='outline-none border ps-3 text-sm h-8 text-black w-40'/> 
            <button className='bg-black text-white ms-2 p-2 outline-none text-sm'>Subscribe</button>
            </div>
        </div>
    </div>
    <hr className='bg-white m-2 mx-auto w-full'/>
    <div className='flex-col flex items-center  text-white gap-2'>
        <p className='ms-2 text-[10px] sm:text-sm'>Copyright &#169;2024 All rights reserved | This website is made by <span className='text-xs sm:text-base text-black'>Arjun kumar</span></p>
        <div className='flex gap-3 mb-2 text-base sm:text-xl'>
        <Link to='https:www.facebook.com'><i class="fa-brands fa-facebook"></i></Link>
        <Link to='https://www.linkedin.com/in/arjunkrgupta/'><i class="fa-brands fa-linkedin"></i></Link>
        <Link to='https://github.com/arjun-krgupta'><i class="fa-brands fa-github"></i></Link>
        <Link to='https:www.instagram.com'><i class="fa-brands fa-square-instagram"></i></Link>     
        </div>
    </div>
    </div>
    </>
    );
}

export default Footer;