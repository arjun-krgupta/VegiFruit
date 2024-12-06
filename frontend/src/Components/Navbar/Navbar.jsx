import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css'
import $ from 'jquery'

$(function()
{
    $(".togle").on("click",function()
{
    $(".menu").slideToggle('active')
    $('.togle').toggleClass('fa-xmark')
})
})

function Navbar() {
  const auth=localStorage.getItem("user")
  const navigate=useNavigate()
  const logout=()=>
  {
    localStorage.clear()
    navigate('/signup')
  }
  return (
    <>
      <header>
        {/* header */}
          <div className="searchbar">
            <input type="text" placeholder="search..." className="border-2" />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
        {/* Navbar */}
        <nav className="navbar">
          <div className="logo">
            <Link to='/'><h1 className="font-bold">VegiFruit</h1></Link>
            <i className="fa-solid fa-bars togle"></i>
          </div>
          {
            auth ? 

          <div className="bg-[rgb(80, 141, 78)] flex justify-end md:justify-between items-center w-full h-14">
              <div className="hidden md:flex md:justify-center text-white md:gap-8 lg:gap-12 md:mx-auto">
                <Link to='/'>Home</Link>
                <Link to='fruit'>Fruits</Link>
                <Link to='vegetable'>Vegetables</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className=" text-white pe-8 md:pe-10 lg:pe-16">
            <Link to='/signup' onClick={logout}>Logout</Link>
            </div>
          </div>
            :
            <div className="bg-[rgb(80, 141, 78)] flex justify-end items-center w-full h-14">
              <div className="text-white flex gap-5 pe-7">
              <Link to='/signup'>SignUp</Link>
              <Link to='/login'>Login</Link>
              </div>
            </div>

          }
          <div className="login-cart">
            <Link to='/cart'><i className="fa-solid fa-bag-shopping cart"></i></Link>
            <span className="cart-count">0</span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
