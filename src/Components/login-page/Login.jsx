import React from 'react'
import "./Login.css"
import Navbar from '../Navbar/Navbar'
import Form from './Form/Form'
import Jingle from '../Jingle/Jingle'

const Login = () => {
  return (
    <div className='login-page'>
      <Navbar />
      <div className="login-section">
        <Form />
        <Jingle />
      </div>
    </div>
  )
}

export default Login
