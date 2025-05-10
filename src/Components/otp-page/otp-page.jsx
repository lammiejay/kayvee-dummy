import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./otp-page.css";
import Navbar from "../Navbar/Navbar";
import envelope from "../../Assets/icons8-open-envelope-96.png";
import Jingle from "../Jingle/Jingle";
import Otp from "./otp/Otp";
import { IoArrowBack } from "react-icons/io5";

const OtpPage = () => {
  const navigate = useNavigate();
  const [userOtp, setUserOtp] = useState("");

  const correctOtp = "123456";

  const handleOtpSubmit = (otpvalue) => {
    setUserOtp(otpvalue);
    if (otpvalue === correctOtp) {
      console.log("OTP verified ✅");
      navigate("/dashboard");
    } else {
      alert("Invalid OTP ❌");
    }
  }

  return (
    <div className="otp-page">
      <Navbar />
      <div className="otp-section">
        <div className="otp-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <img src={envelope} alt="envelope" />
            <p
              style={{ fontSize: "20px", fontWeight: "600", margin: "20px 0" }}
            >
              Verify Account
            </p>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "400",
                color: "grey",
                margin: "20px 0",
              }}
            >
              We sent a 6 digit OTP code to
              <span className="highlight-email" style={{ color: "#3b82f6" }}>
                {" "}
                Shaka@gmail.com
              </span>
            </p>
            <div>
              <Otp onSubmit={handleOtpSubmit} />
            </div>

            <div className="preferences otp-pref">
              <div>
                <Link
                  className="dr-code"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "grey",
                  }}
                >
                  Didn't receive code?
                </Link>
              </div>
              <div>
                <Link
                  className="resend-code"
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                    color: "#3b82f6",
                  }}
                >
                  Resend Code
                </Link>
              </div>
            </div>
            <input
              type="button"
              value="Continue"
              className="continue-button ordinary"
              onClick={() => handleOtpSubmit(userOtp)}
            />
            <Link to={"/"} className="back-link">
              <IoArrowBack />
              <span>Back to log in</span>
            </Link>
          </form>
        </div>
        <Jingle />
      </div>
    </div>
  );
};

export default OtpPage;
