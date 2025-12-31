import React, { use, useState } from 'react';
import axios from "axios";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function handleSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost:8081/login',{email,password})
    .then(res=>console.log(res))
    .catch(err=>console.log(err));
  }



  return (

    <div className='d-flex vh-100  justify-content-center align-items-center bg-primary'>
      <div className='p-3 w-25 bg-white'>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input type="email" placeholder='Enter the email' className='form-control'
              onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input type="password" placeholder='Enter the password' className='form-control'
              onChange={e => setPassword(e.target.value)} />
          </div>
          <button className='btn btn-success mt-3'>Login</button>
        </form>

      </div>
    </div>

  )
}

export default Login
