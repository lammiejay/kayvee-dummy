import React, { useState, useRef } from "react";
import './Otp.css'

const Otp = ({ length = 6, onSubmit }) => {
    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (e, index) => {
      const value = e.target.value;

      if (!/^[0-9]?$/.test(value)) return; // Only allow numbers

      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to next field
      if (value && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }

      // Auto-submit if all filled
      if (newOtp.every((char) => char !== "")) {
        onSubmit?.(newOtp.join(""));
      }
    };

    const handleBackspace = (e, index) => {
      if (e.key === "Backspace" && !otp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    };

    return (
      <div className="otpField">
        {otp.map((digit, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleBackspace(e, index)}
            ref={(el) => (inputRefs.current[index] = el)}
            className="otp-input"
          />
        ))}
      </div>
    );
};

export default Otp;
