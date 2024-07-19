import React from "react";
import { Link } from "react-router-dom";
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
          <div className="menu">
            <Link to='/'>HOME</Link>
            <Link to='fruit'>Fruits</Link>
            <Link to='vegetable'>Vegetables</Link>
            <Link to='/contact'>Contact</Link>
          </div>
          <div className="login-cart">
          <Link to='/login'>
              <i className="fa-solid fa-user"></i>Login
            </Link>
            <Link to='/cart'><i className="fa-solid fa-bag-shopping cart"></i></Link>
            <span className="cart-count">0</span>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
