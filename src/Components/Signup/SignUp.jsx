import React, { useState } from 'react';
import './SignUp.css'
import signup from '../Assets/signup.jpg'

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
    const[state,setState]=useState(
        {
            name:'',email:'',mobile:'',pass:'',cnfpass:""
        }
    )
    const handler=(e)=>
        {
             setState({...state,[e.target.name] : e.target.value})
        }
        
        const[nameMsg,setNameMsg]=useState('')
        const[emailMsg,setEmailMsg]=useState('')
        const[numberMsg,setNumberMsg]=useState('')
        const[passMsg,setPassMsg]=useState('')
        const[cnfPassMsg,setCnfpassMsg]=useState('')
        const submitData=()=>
        {
            const{name,email,pass,mobile,cnfpass}=state
            console.log(state);
            // alert("Register Successfully")

        var alphaExp = /^[a-zA-Z\s]+$/
        var numExp = /^[0-9]*$/
        var emailExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        var passExp = /^([a-zA-Z0-9@*#]{8,15})$/

        // name
        if(name==="")
            {
                setNameMsg("Please Enter username")
                document.querySelector('#name').focus();
                return false
            }
            else if(!alphaExp.test(name))
                {
                    setNameMsg("Name should be alphabet only ")
                    document.querySelector('#name').focus();
                    return false
                }
                else{
                    setNameMsg("")
                }
    // email
    if(email==="")
        {
            setEmailMsg("Please enter Email id")
            document.querySelector('#email').focus();
            return false
        }
        else if(!emailExp.test(email))
            {
                setEmailMsg("Email should be correct")
                document.querySelector('#email').focus();
                return false
            }
            else{
                setEmailMsg("")
            } 
    // Number
    if(mobile==="")
        {
        setNumberMsg("Please enter mobile number")
        document.querySelector('#num').focus();
        return false
        }
        else if(!numExp.test(mobile))
        {
            setNumberMsg("Number should be numeric only")
            document.querySelector('#num').focus();
            return false
        }
        else if(mobile.length<10 || mobile.length>10)
            {
                setNumberMsg("Number Should be 10 digit only")
                document.querySelector('#num').focus();
                return false
            }
            else{
                setNumberMsg("")
            }
            // password
    if(pass==="")
        {
            setPassMsg("Please enter password")
            document.querySelector('#pass').focus();
            return false
        }
        else if(!passExp.test(pass))
            {
                setPassMsg("Password should be 8 to 15 character")
                document.querySelector('#pass').focus();
                return false
            }
            else{
                setPassMsg("")
            }
            // cnfpassword
            if(cnfpass==="")
                {
                    setCnfpassMsg("Please enter confirm password")
                    document.querySelector('#cnfpass').focus();
                    return false
                }
                else if(cnfpass!==pass)
                    {
                        setCnfpassMsg("Password should not be Match")
                        document.querySelector('#cnfpass').focus();
                        return false
                    }
                    else{
                        setCnfpassMsg("")
                    }
        }

    return (
        <>
        <div className="signup-container">
        <div className="signup">
            <h1 className='font-bold'>Sign Up</h1>
        <div className="input-area">
                <input type="text" placeholder='arjun' className='inp' name='name' value={state.name} onChange={handler} id='name' />
                <div className='err'>{nameMsg}</div>

                <input type="Email" placeholder='arjun@gmail.com' className='inp' name='email' value={state.email} onChange={handler} id='email'/>
                <div className='err'>{emailMsg}</div>

                <input type="number" placeholder='+91xxxxxxxxx.' className='inp' name='mobile' value={state.mobile} onChange={handler} id='num'/>
                <div className='err'>{numberMsg}</div>

                <span>
                <input type={show.type} placeholder='*********' className='inp' name='pass' value={state.pass} onChange={handler} id='pass'/>
                </span>
                <div className='err'>{passMsg}</div>
                
                <div className="hide-show">
                <button onClick={hideShow} id='hide'>{show.btnText} </button>
                </div>

                <input type="password" placeholder='confirm password' className='inp' name='cnfpass' value={state.cnfpass} onChange={handler} id='cnfpass'/>
                <div className='err'>{cnfPassMsg}</div>

            <button onClick={submitData}>Register</button>
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