import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import "./Form.css";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);
  
  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [location.key]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("signing in with:", { email, password });

    const correctEmail = "admin@kayvee.com";
    const correctPassword = "password123";

    if ( email === correctEmail && password === correctPassword ) {
      console.log("Authenticated ✅");
      navigate("/otp");
      } else {
        alert("Invalid Credentials ❌");
      }
  };

  return (
    <div className="form-container" key={location.key}>
      <div className="form">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <h2>Hi, Breakthrough 👋🏽</h2>
          <p style={{ fontSize: "16px", fontWeight: "500" }}>
            Your security is our priority. Bank with confidence. ✨
          </p>
          <div className="input-fields">
            <label className="input-field" htmlFor="email">
              Email Address
              <input
                autoComplete="off"
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="e.g john@email.com"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label className="input-field password-field" htmlFor="password">
              Password
              <input
                autoComplete="off"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                placeholder="Enter password (min. of 8 characters)"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="password-eye"
              >
                {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
              </button>
            </label>
          </div>
          <div className="preferences">
            <label
              htmlFor="remember-me"
              style={{ color: "grey", cursor: "pointer" }}
            >
              <input
                type="checkbox"
                name="remember-me"
                id="remember-me"
                style={{ cursor: "pointer", marginRight: "6px" }}
              />
              Remember Me
            </label>
            <a href="http://" className="forgot-password">
              Forgot Password?
            </a>
          </div>
          <input
            className="signin-button ordinary"
            type="submit"
            value="Sign in"
          />
          <button className="signin-button google" type="submit">
            <FcGoogle /> Sign In With Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
