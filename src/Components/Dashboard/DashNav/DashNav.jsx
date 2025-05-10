import React from 'react'
import './DashNav.css'
import { IoMdNotificationsOutline } from "react-icons/io";
import userProfile from '../../../Assets/icons8-profile-picture-50.png';

const DashNav = () => {
  return (
    <div className="dashnav-container">
      <div className="hello-container">
        <p className="hello-text">
          Hello, 👋🏽
          <span className="user-name">Shaka-Momodu Breakthrough</span>
        </p>
      </div>
      <div className="right-nav">
        <div className="notifications">
          <IoMdNotificationsOutline />
          <span className="notis-count">3</span>
        </div>
        <img src={ userProfile } className="profileImg" alt="user profile" />
      </div>
    </div>
  );
}

export default DashNav
