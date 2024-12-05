import React, { useState } from 'react';
import forget from '../Assets/forget.jpg'
import './Forget.css'

function Forget(props) {
    const[pass,setPass]=useState({
        btnText:"show",type:"password"
    })
    const[state,setState]=useState({
        old_pass:'',new_pass:'',cnf_pass:""
    })
    const[oldPassMsg,setOldMsg]=useState('')
    const[newPassMsg,setNewMsg]=useState('')
    const[cnfPassMsg,setCnfMsg]=useState('')

    const handler=(e)=>
        {
            setState({...state,[e.target.name]:e.target.value})
        }
    const submit_data=()=>
        {
            // form validation
        const{old_pass,new_pass,cnf_pass}=state
         var passExp = /^([a-zA-Z0-9@*#]{8,15})$/
// old password
if(old_pass==="")
    {
        setOldMsg("Please enter old password")
        document.querySelector('#old-pass').focus();
        return false
    }
else if(!passExp.test(old_pass))
    {
        setOldMsg("Password should be 8 to 15 character")
        document.querySelector('#old-pass').focus();
        return false
    }
    else{
        setOldMsg('')
    }
// New password
if(new_pass==="")
    {
        setNewMsg("Please enter new password")
        document.querySelector('#new-pass').focus();
        return false
    }
    else{
        setNewMsg("")
    }
// confirm password
if(cnf_pass==="")
    {
        setCnfMsg("Please enter confirm passowrd")
        document.querySelector('#cnf-pass').focus();
        return false
    }
else if(cnf_pass!==new_pass)
    {
        setCnfMsg("Password does not match")
        document.querySelector('#cnf-pass').focus();
        return false
    }
    else{
        setCnfMsg('')
    }
        }
        // hide show
    const show_hide=()=>
        {
        if((pass.type)==="password")
            {
                setPass({type:"text",btnText:"hide"})
            }
        else{
            setPass({type:"password",btnText:"show"})
        }
        }
    return (
     <>
     <div className="forget-area">
        <div className="forget-container">
            <h1 className='font-bold'>Reset Password</h1>
          <div className="forget-input">
            <span>
            <input type='text' className="in" placeholder='old password' name='old_pass' value={state.old_pass} onChange={handler} id='old-pass'/>
            </span>
            <div className="catch">{oldPassMsg}</div>

           <span>
           <input type={pass.type} className="in" name='new_pass' value={state.new_pass} onChange={handler} id='new-pass' placeholder='new password'/>
           </span>
            <div className="catch">{newPassMsg}</div>

                <button onClick={show_hide} id='hideshow'>{pass.btnText} </button>

          <span>
          <input type='password' className="in" name='cnf_pass' value={state.cnf_pass} onChange={handler} id='cnf-pass' placeholder='confirm password' />
          </span>
            <div className="catch">{cnfPassMsg}</div>

            <button onClick={submit_data}>Change Password</button>
            </div>

        </div>
        <div className="forget-img">
            <img src={forget} alt="" />
        </div>
     </div>
     </>
    );
}

export default Forget;