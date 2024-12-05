import React, { useEffect, useState } from 'react';
import './SignUp.css'
import signup from '../Assets/signup.jpg'
import { useNavigate } from 'react-router-dom';

function SignUp(props) {
    const[show,showPass]=useState({type:'password',btnText:'show'})
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
          const auth=localStorage.getItem('user')
          if(auth)
          {
            navigate('/')
          }
        },[])

        const[name,setName]=useState("")
        const[email,setEmail]=useState("")
        const[password,setPassword]=useState("")
        const[cnfPassword,setCnfPassword]=useState("")
        const[phone,setPhone]=useState("")
       const navigate=useNavigate()

        const getData=async ()=>
        {
            console.log(name,email,phone,password,cnfPassword)
              let result=await fetch("http://localhost:4000/register",{
                method:"post",
                body:JSON.stringify({name,email,phone,password,cnfPassword}),
                headers:{"Content-Type":"application/json"}
              })
              result=await result.json()
              console.log(result)
              localStorage.setItem("user",JSON.stringify(result))
              navigate('/')
        }
        

    return (
        <>
        <div className="signup-container">
        <div className="signup">
            <h1 className='font-bold'>Sign Up</h1>
        <div className="input-area">
                <input type="text" placeholder='arjun' className='inp' name='name' value={name} onChange={(e)=>setName(e.target.value)} id='name' />
                <div className='err'></div>

                <input type="Email" placeholder='arjun@gmail.com' className='inp' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} id='email'/>
                <div className='err'></div>

                <input type="number" placeholder='+91xxxxxxxxx.' className='inp' name='mobile' value={phone} onChange={(e)=>setPhone(e.target.value)} id='num'/>
                <div className='err'></div>

                <span>
                <input type={show.type} placeholder='*********' className='inp' name='pass' value={password} onChange={(e)=>setPassword(e.target.value)} id='pass'/>
                </span>
                <div className='err'></div>
                
                <div className="hide-show">
                <button onClick={hideShow} id='hide'>{show.btnText} </button>
                </div>

                <input type="password" placeholder='confirm password' className='inp' name='cnfpass' value={cnfPassword} onChange={(e)=>setCnfPassword(e.target.value)} id='cnfpass'/>
                <div className='err'></div>

            <button onClick={getData} type='button' >Register</button>
            </div>
            </div>
            <div className="signup-img">
                <img src={signup} alt="" />
            </div>
            </div>
        </>
    );
}

export default SignUp;