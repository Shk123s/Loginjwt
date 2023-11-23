import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useCookies} from "react-cookie";
import { useState,useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const Supermainpage = () => {
  const Navigate = useNavigate();
  const [cookies,setcookie,removiecookie] = useCookies([]);
  useEffect(()=>{
    const verifyUser  = async  ()=>{
     if (!cookies.jwt) {
      Navigate('/login')
     }
     else
     {
      const {data} = await axios.post("http://localhost:4000",{},{withCredentials:true});
      if(!data.status)
      {
       removiecookie("jwt");
       Navigate('/login');
      }
      else
      {
        toast(`Hi ${data.user}`,{theme:"dark"});
      }
     }
    
    } 
   return ()=>  verifyUser();
  },[cookies,Navigate,removiecookie])
  const Logout = ()=>{
    removiecookie("jwt");
    Navigate('/register');
  }
  return (
    <div>
      <h1>Hello kaise ho</h1>
      <button type='button'onClick={Logout} >Logout</button>
      <ToastContainer/>
    </div>
  )
}

export default Supermainpage
