import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [error,setError] = useState<any>()
  let token = Cookies.get('token')
  const navigate = useNavigate()


const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

const validateEmail = (email : string) => {
    if(!email || !email.match(isValidEmail)){
        setError("Email Tidak valid")
        return true
    }

}
  useEffect(()=>{
    if(token){
        navigate('/')
    }
  },[])

  //eve.holt@reqres.in
  //cityslicka
  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    if(validateEmail(inputEmail)){
        return
    }
 
    try{

      const res = await axios.post('https://reqres.in/api/login',
      {
        email : inputEmail,
        password : inputPassword
      }
      ) 
      Cookies.set('token', res?.data.token)
      navigate('/')
    }catch(err : any){
      setError(err?.response?.data?.error)
    }

  }
  return (
    <div  className="App">
     <form style={{display : "flex", flexDirection : 'column' ,gap : '12px'}} onSubmit={(e)=>handleSubmit(e)}>
        <input onChange={(e)=>setInputEmail(e.target.value)} placeholder='email' ></input>
        <input onChange={(e)=>setInputPassword(e.target.value)} placeholder='password' type="text" ></input>
        <p style={{color : 'red'}}>{error}</p>
        <button type='submit'>
          Login
        </button>
     </form>

    </div>
  )
}

export default Login
