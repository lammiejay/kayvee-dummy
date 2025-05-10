import React from 'react'
import './Jingle.css';
import jingleImage from "../../Assets/Jingle_img_2.png"

const Jingle = () => {
  return (
    <div className='jingle-container'>
      <div className="jingle-text">
        <h1>Seamless Banking at Your Fingertips</h1>
        <p>Sign up now and enjoy secure, fast, and easy banking. Send money, pay bills and manage your finances -- all in one place</p>
      </div>
      <img src={jingleImage} className='jingle-image' alt="" />
    </div>
  )
}

export default Jingle
