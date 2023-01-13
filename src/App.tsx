import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Cookies from 'js-cookie';
import {  useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const token = Cookies.get('token')

  useEffect(()=>{
    if(!token){
      navigate('/login')
    }
  },[])

  return (
    <div  className="App">
      <h1>Welcome To The Website</h1>
    </div>
  )
}

export default App
