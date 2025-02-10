import React, { useState } from 'react'
import './style.css'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const[values, setvalues] = useState({
        email:'',
        password:'',

    })
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
        const handlesubmit = (event) => {
            event.preventDefault()
            axios.post('http://localhost:3000/auth/adminlogin', values)
            .then(result => {
                if(result.data.loginStatus) {
                    navigate('/dashboard')
                } else{
                    setError(result.data.Error)
                }
                    
            })
            .catch(err => console.log(err))
        }

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 LoginPage'>
        <div className='p-3 rounded w25 border LoginForm'>
            <div className='text-danger'>
                {error && error}
            </div>
            <div className='d-flex justify-content-center align-items-center'>
            <h2>EMS Log in</h2>
            </div>
            <form onSubmit={handlesubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email:</strong></label>
                    <input type='email' name='email'autoComplete='off' placeholder='enter email'
                   onChange={(e) => setvalues({...values, email : e.target.value})} className='form-control rounded 0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password:</strong></label>
                    <input type='password' name='password' placeholder='enter password'
                  onChange={(e) => setvalues({...values, password : e.target.value})} className='form-control rounded 0'/>  
                </div>
                <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>
                
                <div className='mb-1'>
                    <input type='checkbox' name='tick' placeholder=' tick' className='me-2' />
                    <label htmlFor='password'>You are Agree with terms & condition</label>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login;