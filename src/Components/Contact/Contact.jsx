import React, { useState } from 'react';
import './Contact.css'
import contact from '../Assets/contact.jpg'

function Contact(props) {
    const[state,setState]=useState(
        {
            name:'',email:'',mobile:'',msg:''
        }
    )
    const handler=(e)=>
        {
             setState({...state,[e.target.name] : e.target.value})
        }
        
        const[nameMsg,setNameMsg]=useState('')
        const[emailMsg,setEmailMsg]=useState('')
        const[numberMsg,setNumberMsg]=useState('')
        const[Msg,setMsg]=useState('')
        const submitData=()=>
        {
            const{name,email,msg,mobile}=state
            console.log(state);

        var alphaExp = /^[a-zA-Z\s]+$/
        var numExp = /^[0-9]*$/
        var emailExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        var alphaAddExp = /^[a-zA-Z0-9\s,.'-]{3,}$/

        // fname
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
            // Message
            if(msg==="")
                {
                    setMsg("Please enter a message")
                    document.querySelector('#msg').focus();
                    return false
                }
                else if(!alphaAddExp.test(msg))
                    {
                        setMsg("Message should be Meaningfull")
                        document.querySelector('#msg').focus();
                        return false
                    }
                    else{
                        setMsg("")
                    }
        }

    return (
        <>
        <div className="contact-area">
        <div className="contact-us">
            <h1 className='font-bold'>Contact Us</h1>
        <div className="input-container">
                <input type="text" placeholder='arjun' className='input' name='name' value={state.name} onChange={handler} id='name'/>
                <div className='error'>{nameMsg}</div>

                <input type="Email" placeholder='arjun@gmail.com' className='input' name='email' value={state.email} onChange={handler} id='email' />
                <div className='error'>{emailMsg}</div>

                <input type="number" placeholder='+91xxxxxxxxx' className='input' name='mobile' value={state.mobile} onChange={handler} id='num'/>
                <div className='error'>{numberMsg}</div>

                <textarea id="msg" placeholder='Hello...' name='msg' value={state.msg} onChange={handler} ></textarea>
                <div className='error'>{Msg}</div>

            <button onClick={submitData}>Send</button>
            </div>
            </div>
            <div className="contact-img">
                <img src={contact} alt="" />
            </div>
            </div>
        </>
    );
}

export default Contact;