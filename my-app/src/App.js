import './App.css';
import React, { useState } from 'react';
import Register from './Register';
import Login from './Login'
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App(){
  return(
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="Register" element={<Register/>}/>
        <Route path="Home" element={<Home/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;


