import React from 'react'
import { useNavigate } from 'react-router-dom'

const Supermainpage = () => {
  const Navigate = useNavigate();
  const Logout = ()=>{
    Navigate('/register');
  }
  return (
    <div>
      <h1>Hello kaise ho</h1>
      <button type='button'onClick={Logout} >Logout</button>
    </div>
  )
}

export default Supermainpage
