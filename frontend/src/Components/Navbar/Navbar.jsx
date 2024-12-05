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
              <div className="menu">
              <Link to='/'>HOME</Link>
              <Link to='fruit'>Fruits</Link>
              <Link to='vegetable'>Vegetables</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/signup' onClick={logout}>Logout</Link> 
              </div>
              :
              <div className="login-cart">
              <Link to='/signup'>SignUp</Link>
              <Link to='/login'>Login</Link>
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
