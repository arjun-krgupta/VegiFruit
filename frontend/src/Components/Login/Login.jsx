import React, { useEffect, useState } from 'react';
import './Login.css'
import login from '../Assets/login.jpg'
import { Link, useNavigate} from 'react-router-dom';

function Login(props) {
    const navigate=useNavigate()
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

        useEffect(()=>
        {
           const auth=localStorage.getItem("user")
           if(auth)
           {
            navigate('/')
           }
        },[])
        const[email,setEmail]=useState("")
        const[password,setPassword]=useState("")

        const handleLogin=async ()=>
        {
            let result=await fetch('http://localhost:4000/login',{
                method:"post",
                body:JSON.stringify({email,password}),
                headers:{"Content-Type":"application/json"}
            })
            result=await result.json()
            console.log(result)
            if(result.name)
            {
                localStorage.setItem("user",JSON.stringify(result))
                 navigate('/')
            }
            else{
                alert("Please enter correct Details")
            }
        }
    

    return (
        <>
         <div className="login-area ">
         <div className="login mb-4">
         <h1 id='login' className='font-bold'>Login</h1>
         <div className="login-input">
            <input type="email" className='input-text' placeholder='arjun@gmail.com' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} id='mail' />

            <span>
                <input type={show.type} placeholder='*********' className='input-text' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} id='pass'/>
                </span>
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
            <button onClick={handleLogin} type='button'>Login</button>
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