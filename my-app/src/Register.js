import React, { useState } from "react";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { Cookies, useCookies } from 'react-cookie';

function Register(){

  const [name,setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate();
 // const cookies=new Cookies();
  function newUser(){
    console.warn({name,email,password});
    let data = {name,email,password}
    fetch("http://logger-server.herokuapp.com/api/logger/auth/register",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
      }).then(response => response.json())
      .then(data =>{
        if(data.status){
            alert("Signed Up Successfully")
           // cookies.set("Token",data.data.token)
            //if(cookies.get('Token')){
             // navigate("/Home")

           // }
           // else{
            //  navigate("/Register")

           // } 

        }else{
            alert(data?.data?.err?.msg)
            navigate("/Register")
        }
      });
      }

    return(

    <div className="register">
   <br/>
   <h1>Register Page</h1>
      <input type="name" value={name} onChange={(e)=>{setName(e.target.value)}} name="Name" placeholder="Name"></input><br></br>
      <br></br>
      <input type="email" value={email} onChange={(e) =>{setEmail(e.target.value)}} name="Email" placeholder="Email"></input><br/><br/>
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} name='Password' placeholder='Password'></input><br></br>
      <br/>
      <button type="button" onClick={newUser}>Register</button>
    </div>
    )
}
export default Register;
