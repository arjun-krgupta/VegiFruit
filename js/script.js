
// toggle 
let togle=document.querySelector('#nav-icon')
let nav=document.querySelector('.menu')

togle.onclick=()=>
{
    togle.classList.toggle('fa-xmark')
    nav.classList.toggle('active')
}

// scroll
window.onscroll=()=>
{
    togle.classList.remove('fa-xmark')
    nav.classList.remove('active')
}

// img slider

function show()
{
    for(let i=1;i<=4;i++)
    {
        document.getElementById("slide"+i).style.display="inline-block"
        document.getElementById('slider'+i).style.display='inline-block'
    }
}



// form validation
 var alphaExp = /^[a-zA-Z\s]+$/
 var passExp = /^([a-zA-Z0-9@*#]{8,15})$/
 var numExp = /^[0-9]*$/
 var emailExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
 var alphaAddExp = /^[a-zA-Z0-9\s,.'-]{3,}$/

function validate() 
{
     //////// name validation ////////////
     let x= document.getElementById("name").value
     if (x == "") {
         document.getElementById("name-error").innerHTML = "Please enter your name"
         document.getElementById("name-error").style = "color:red; margin:1px 10px;font-style:italic; font-size:16px;"
         document.getElementById("name").focus()
         return false
     }
     else if (!x.match(alphaExp)) {
         document.getElementById("name-error").innerHTML = "Your name should be character only"
         document.getElementById("name-error").style = "color:red; margin:1px 10px;font-style:italic; font-size:16px;"
         document.getElementById("name").focus()
         return false
     }
     else if (x.length < 6 || x.length > 20) {
         document.getElementById("name-error").innerHTML = "Your Full Name should be b/w of 6 to 20 Character"
         document.getElementById("name-error").style = "color:red; margin:1px 10px;font-style:italic; font-size:16px;"
         document.getElementById("name").focus()
         return false
     }
     else {
         document.getElementById("name-error").innerHTML = ""
     }
     /////// Email validation /////////
     let y = document.getElementById("mail").value
     if (y == "") {
         document.getElementById("mail-error").innerHTML = "Please Enter Email id"
         document.getElementById("mail-error").style = "color:red; margin:1px 10px;font-style:italic; font-size:16px;"
         document.getElementById('mail').focus()
         return false
     }
     else if (!y.match(emailExp)) {
         document.getElementById('mail-error').innerHTML = "Your email should be valid"
         document.getElementById("mail-error").style = "color:red; margin:1px 10px;font-style:italic; font-size:16px;"
         document.getElementById("mail").focus()
         return false
     }
     else {
         document.getElementById("mail-error").innerHTML = ""
     }
      ///////number validation//////////
      let z = document.forms["myform"]["number"].value
      if (z == "") {
          document.getElementById("num-error").innerHTML = "Please enter mobile number"
          document.getElementById("num-error").style = "color:red; margin:1px 10px;font-style:italic; font-size:16px;"
          document.forms["myform"]["number"].focus()
          return false
      }
      else if (!z.match(numExp)) {
          document.getElementById("num-error").innerHTML = "Your character should be numeric"
          document.getElementById("num-error").style = "color:red; margin:1px 10px;font-style:italic; font-size:16px;"
          document.forms["myform"]["number"].focus()
          return false
      }
      else if (z.length < 10 || z.length > 12) {
          document.getElementById("mob-error").innerHTML = "Your mobile number should be b/w 10 to 12 in length "
          document.getElementById("num-error").style = "color:red; margin:1px 10px;font-style:italic; font-size:16px;"
          document.forms["myform"]["number"].focus()
          return false
      }
      else {
          document.getElementById("num-error").innerHTML = ""
      }     
}
