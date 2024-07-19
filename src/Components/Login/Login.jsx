import React, { useState } from 'react';
import './Login.css'
import login from '../Assets/login.jpg'
import { Link} from 'react-router-dom';

function Login(props) {
    const[show,showPass]=useState({type:'password',btnText:"show"})
    // Password hide show
     const hideShow=()=>
        {
            if((show.type)==="password")
                {
                    showPass({type:'text',btnText:"hide"})
                }
                else{
                    showPass({type:'password',btnText:"show"})
                }
        }
        // form validation

    const[state,setState]=useState({
        email:'',password:''
    })
    const[emailMsg,setEmail]=useState('')
    const[passwordMsg,setPassword]=useState('')
    const handler=(e)=>
        {
            setState({...state,[e.target.name]:e.target.value})
        }
    const submit=()=>
        {
            const{email,password}=state
            var passExp = /^([a-zA-Z0-9@*#]{8,15})$/
            var emailExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            // email
            if(email==="")
            {
                setEmail("Please enter Email id")
                document.querySelector('#mail').focus();
                return false
            }
            else if(!emailExp.test(email))
                {
                    setEmail("Email id Should be correct")
                    document.querySelector('#mail').focus();
                    return false
                }
            else{
                setEmail("")
                }
        //    Password
        if(password==='')
            {
                setPassword("Please enter password")
                document.querySelector('#pass').focus();
                return false
            }
        
        else if(!passExp.test(password))
            {
                setPassword("Password should be correct")
                document.querySelector('#pass').focus();
                return false
            }
            else if(password.length<8 || password.length>15)
                {
                    setPassword("Password should be 8 to 15 character")
                    document.querySelector('#pass').focus();
                    return false
                }
                else {
                     setPassword("")
                }

        }
    return (
        <>
         <div className="login-area ">
         <div className="login mb-4">
         <h1 id='login' className='font-bold'>Login</h1>
         <div className="login-input">
            <input type="email" className='input-text' placeholder='arjun@gmail.com' name='email' value={state.email} onChange={handler} id='mail' />
            <div className="eror">{emailMsg}</div>

            <span>
                <input type={show.type} placeholder='*********' className='input-text' name='password' value={state.password} onChange={handler} id='pass'/>
                </span>
            <div className="eror">{passwordMsg}</div>
         </div>
         <div className="hide-show">
            <button onClick={hideShow}>{show.btnText}</button>
            </div>
         <div className="password">
            <div className="check">
            <input type="checkbox" className='cursor-pointer'/> <span>Remember me</span>
            </div>
            <Link to='/forget' className='hover:underline text-blue-600'>Forget Password</Link>
         </div>
         <div className="login-btn">
            <button onClick={submit}>Login</button>
            <span>or Login with</span>
         </div>
         <div className="login-account">
         <Link to='https://www.google.com' id='google'>
         <span><i className="fa-brands fa-google"></i> Google</span>
         </Link>
         
            <Link to='https://www.facebook.com' id='facebook'>
            <span><i className="fa-brands fa-facebook-f"></i> Facebook</span></Link>
         </div>
         <div className="sign">
            Doesn't have an account yet ? <Link to='/signup' className='hover:underline text-blue-900'>SignUp</Link>
         </div>
         </div>
         <div className="login-img">
            <img src={login} alt="" />
         </div>
         </div>
        </>
    );
}

export default Login;