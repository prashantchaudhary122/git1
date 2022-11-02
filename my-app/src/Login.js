import React from 'react'
import Home from './Home';
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Cookies, useCookies } from 'react-cookie'; 
function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const cookies=new Cookies();
 

  function User(){
    console.warn({email,password});
    let data = {email,password}
    fetch("http://logger-server.herokuapp.com/api/logger/auth/login",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    }).then(response => response.json())
    .then(data =>{
        if(data.status){
            alert("Logged in Successfully")
            cookies.set("Token",data.data.token)
            if(cookies.get('Token')){
              navigate("home")
            }
            else{
              navigate("/");

            }
      
           
        

           
        }else{
            alert(data?.data?.err?.msg)
        }
    });
}
    return(
<div className='login'>
<br/>
       <h1>Login Page</h1>
      <input type="email" value={email} onChange={(e) =>{setEmail(e.target.value)}} name='Email' placeholder='Email'></input><br/><br/>
      <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} name='Password' placeholder='Password'></input><br></br>
      <br/>
      <button type='button' onClick={User}>Login</button>
      <button><Link to="/Register">Register</Link></button>

</div>
    )
}
export default Login;
