import React, { useEffect } from "react";
import { Cookies, useCookies } from 'react-cookie'; 
import { useNavigate } from "react-router-dom";
function Home(){
    
    const cookies=new Cookies;
    const navigate=useNavigate();
    useEffect(()=>{
    
    if(!cookies.get('Token')){
        navigate("/")

     // navigate("/Home");
      }
    },[]);
    return(
        <div className="Home">
            <h2>Home Page</h2>
        </div>

    );
    
    
}
export default Home;