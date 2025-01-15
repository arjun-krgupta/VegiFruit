import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import $ from 'jquery'
import { useSelector } from "react-redux";

$(function()
{
    $(".togle").on("click",function()
{
    $(".menu").slideToggle('active')
    $('.togle').toggleClass('fa-xmark')
})
})

function Navbar(props) {
  const {cartItem}=useSelector((state)=>state.allCart)
  return (
    <>
      <header>
        {/* header */}
          <div className="searchbar">
            <input type="text" placeholder="search..." className="border-2" />
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
          </div>
        {/* Navbar */}
        <nav className="navbar flex justify-between items-center w-full h-[60px]">
            <div className="logo">
              <Link to='/'><h1 className="font-bold">VegiFruit</h1></Link>
              <i className="fa-solid fa-bars togle"></i>
            </div>
              <div className="hidden menu md:flex items-center gap-x-10 text-lg text-white">
                <Link to='/'>Home</Link>
                <Link to='/fruit'>Fruits</Link>
                <Link to='/vegetable'>Vegetables</Link>
                <Link to='/contact'>Contact</Link>
            </div> 
            <div className="login-cart text-lg">
              <Link to='/signup'>SignUp</Link>
              <Link to='/login'>Login</Link>
              <Link to='/cart'><i className="fa-solid fa-bag-shopping cart"></i>
              <span className="cart-count">{cartItem.length}</span>
              </Link>
            </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
