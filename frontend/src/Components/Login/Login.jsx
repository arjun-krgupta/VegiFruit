import React, { useEffect, useState } from 'react';
import './Login.css'
import login from '../Assets/login.jpg'
import { Link, useNavigate} from 'react-router-dom';

function Login(props) {
    const navigate=useNavigate()
    // hide show
    const[pass,setPass]=useState({type:"password",className:"fa-solid fa-eye-slash cursor-pointer"})
    const hideShow=()=>{
        if((pass.type)==="password")
        {
            setPass({type:"text",className:"fa-solid fa-eye cursor-pointer"})
        }
        else{
            setPass({type:"password",className:"fa-solid fa-eye-slash cursor-pointer"})
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

            <div className='flex justify-between items-center border-2 border-black px-1 w-[350px] h-[40px] rounded-[10px]'>
                <input type={pass.type} placeholder='*********' className='border-0 outline-none text-[15px] ps-3' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} id='pass'/>
                <i className={pass.className} onClick={hideShow}></i>
                </div>
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