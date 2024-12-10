import React, { useEffect, useState } from 'react';
import './SignUp.css'
import signup from '../Assets/signup.jpg'
import { useNavigate } from 'react-router-dom';

function SignUp(props) {
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
          const auth=localStorage.getItem('user')
          if(auth) 
          {
            navigate('/ ')
          }
        },[])

        const[name,setName]=useState("")
        const[email,setEmail]=useState("")
        const[password,setPassword]=useState("")
        const[cnfPassword,setCnfPassword]=useState("")
        const[phone,setPhone]=useState("")

        // form validation
        const[nameMsg,setNameMSg]=useState("")
        const[emailMsg,setEmailMSg]=useState("")
        const[numberMsg,setNumberMSg]=useState("")
        const[passwordMsg,setPasswordMSg]=useState("")
        const[cnfpasswordMsg,setCnfPasswordMSg]=useState("")

       const navigate=useNavigate()

        const getData=async ()=>
        {
            let name=document.querySelector("#name").value
            let email=document.querySelector("#email").value
            let number=document.querySelector("#number").value
            let password=document.querySelector("#pass").value
            let cnfPassword=document.querySelector("#cnfpass").value
                var nameExp = /^[a-zA-Z\s]+$/
                var passExp = /^([a-zA-Z0-9@*#]{8,15})$/
                var numExp = /^[0-9]*$/
                var emailExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

                    // name
                if(name=="")
                {
                    setNameMSg("Please enter name")
                    document.querySelector("#name").focus()
                    return false
                }
                else if(!name.match(nameExp))
                {
                    setNameMSg("Name should be valid only.")
                    document.querySelector("#name").focus()
                    return false
                }
                else{
                    setNameMSg("")
                }
                   // Email
                   if(email=="")
                    {
                        setEmailMSg("Please enter email")
                        document.querySelector("#email").focus()
                        return false
                    }
                    else if(!email.match(emailExp))
                    {
                        setEmailMSg("Email should be valid only.")
                        document.querySelector("#email").focus()
                        return false
                    }
                    else{
                        setEmailMSg("")
                    }
                    // number
                   if(number=="")
                    {
                        setNumberMSg("Please enter number")
                        document.querySelector("#number").focus()
                        return false
                    }
                    else if(!number.match(numExp))
                    {
                        setNumberMSg("Number should be Numeric Only.")
                        document.querySelector("#number").focus()
                        return false
                    }
                    else if(number.length<10 || number.length>10)
                    {
                        setNumberMSg("Number should be 10 digits.")
                        document.querySelector("#number").focus()
                        return false
                    }
                    else{
                        setNumberMSg("")
                    }
                     // Password
                   if(password=="")
                    {
                        setPasswordMSg("Please enter Password")
                        document.querySelector("#pass").focus()
                        return false
                    }
                    else if(!password.match(passExp))
                    {
                        setPasswordMSg("Password should be 8 to 15 character.")
                        document.querySelector("#pass").focus()
                        return false
                    }
                    else{
                        setPasswordMSg("")
                    }
                    // Confirm Password
                    if(cnfPassword=="")
                    {
                        setCnfPasswordMSg("Please enter confirm password")
                        document.querySelector("#cnfpass").focus()
                        return false
                    }
                    else if(cnfPassword!=password)
                    {
                        setCnfPasswordMSg("Password doesn't match")
                        document.querySelector("#cnfpass").focus()
                        return false
                    }
                    else{
                        setCnfPasswordMSg("")
                    }

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
                <div className='err'>{nameMsg}</div>

                <input type="Email" placeholder='arjun@gmail.com' className='inp' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} id='email'/>
                <div className='err'>{emailMsg}</div>

                <input type="text" placeholder='+91xxxxxxxxx.' className='inp' name='mobile' value={phone} onChange={(e)=>setPhone(e.target.value)} id='number'/>
                <div className='err'>{numberMsg}</div>

                <div className='flex justify-between items-center border-2 border-black px-1 w-[290px] h-[36px] rounded-[5px]'>
                    <input type={pass.type} placeholder='password' name='pass' className='border-0 outline-none text-[15px] ps-3' id='pass' value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <i className={pass.className} onClick={hideShow}></i>
                </div>
                <div className='err'>{passwordMsg}</div>
                

                <input type="password" placeholder='confirm password' className='inp' name='cnfpass' value={cnfPassword} onChange={(e)=>setCnfPassword(e.target.value)} id='cnfpass'/>
                <div className='err'>{cnfpasswordMsg}</div>

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