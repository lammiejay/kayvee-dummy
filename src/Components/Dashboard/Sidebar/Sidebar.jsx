import { useState, React } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RxExit } from "react-icons/rx";
import { RiHome5Line } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsChatSquareText } from "react-icons/bs";
import { CiCreditCard1 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import userProfile from "../../../Assets/icons8-user-48.png";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleClick = (link) => {
    setActiveItem(link);
  };

  return (
    <div className="sidebar-container">
      <div className="top-side">
        <div className="kayveelogo">
          <img
            width="150"
            height="44"
            src="https://kayveemfb.com.ng/wp-content/uploads/2023/09/cropped-cropped-Kayvee-logo-350-by-100-150x44.png"
            class="custom-logo"
            alt="Kayvee Microfinance Bank"
            decoding="async"
            srcset="https://kayveemfb.com.ng/wp-content/uploads/2023/09/cropped-cropped-Kayvee-logo-350-by-100-150x44.png 1x, https://kayveemfb.com.ng/wp-content/uploads/2023/09/cropped-Kayvee-logo-350-by-100.png 2x"
            sizes="(max-width: 150px) 100vw, 150px"
          ></img>
        </div>
        <div className="search-bar">
          <CiSearch className="search-icon" />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="search-input"
          />
        </div>
        <div className="notification">
          <div className="notis-text-container">
            <IoMdNotificationsOutline />
            <p className="notis-text">Notifications</p>
          </div>
          <span className="notis-count">30</span>
        </div>
        <div className="middle">
          <p className="bh-header">MENU</p>
          <ul className="menu-items">
            <li
              className={`menu-item ${activeItem === "home" ? "active" : ""}`}
              onClick={() => handleClick("home")}
            >
              <RiHome5Line className="menu-icon" />
              Home
            </li>
            <li
              className={`menu-item ${
                activeItem === "account" ? "active" : ""
              }`}
              onClick={() => handleClick("account")}
            >
              <FiUsers className="menu-icon" />
              Account
            </li>
            <li
              className={`menu-item ${activeItem === "borrow" ? "active" : ""}`}
              onClick={() => handleClick("borrow")}
            >
              <FaRegCalendarAlt className="menu-icon" />
              Borrow
            </li>
            <li
              className={`menu-item ${
                activeItem === "insight" ? "active" : ""
              }`}
              onClick={() => handleClick("insight")}
            >
              <BsChatSquareText className="menu-icon" />
              Insight
            </li>
            <li
              className={`menu-item ${
                activeItem === "support" ? "active" : ""
              }`}
              onClick={() => handleClick("support")}
            >
              <CiCreditCard1
                className="menu-icon"
                style={{ fontSize: "16px" }}
              />
              Support
            </li>
            <li
              className={`menu-item ${
                activeItem === "settings" ? "active" : ""
              }`}
              onClick={() => handleClick("settings")}
            >
              <CiSettings className="menu-icon" style={{ fontSize: "18px" }} />
              Settings
            </li>
          </ul>
        </div>
      </div>

      <div className="bottom-half">
        <div className="logout">
          <RxExit className="exit-icon" />
          <Link to={"/"} className="logout-link">
            Logout
          </Link>
        </div>

        {/* Profile Info */}
        <div className="user-profile">
          <img src={userProfile} alt="User Avatar" className="avatar" />
          <div className="user-details">
            <h4>Shaka Breakthrough</h4>
            <p>shaka@gmail.com</p>
          </div>
        </div>
        <div className="progress-section">
          <div className="progress-bar">
            <div className="progress" />
          </div>
          <span style={{
            fontSize: "12px"
          }}>70%</span>
        </div>
        <p
          style={{
            marginTop: "8px",
            // marginLeft: "10px",
            fontSize: "12px",
            cursor: "pointer"
          }}
        >
          Complete Your Profile
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
