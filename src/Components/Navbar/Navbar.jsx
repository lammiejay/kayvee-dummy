import React from "react";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
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
      <div className="sign-up">
        <p>Don't have an account?</p>
        <a href="" className="sign-up-link">
          Sign up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
