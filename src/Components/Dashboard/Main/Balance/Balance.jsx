import React from "react";
import './Balance.css'
import { IoEyeOutline } from "react-icons/io5";
// import { IoEyeOffOutline } from "react-icons/io5";
import naijaFlag from "../../../../Assets/icons8-nigeria-circular-48.png";
import { IoIosArrowDown } from "react-icons/io";

const Balance = () => {
  return (
    <div className="balance-container">
      <h4 className="balance-header">
        Your Balances <IoEyeOutline className="eye-icon" />
      </h4>
      <div className="balances">
        <article className="balance-body">
          <div className="currency">
            <img src={naijaFlag} alt="Naija Flag" />
            NGN <IoIosArrowDown />
          </div>
          <div className="balance">
            <p>Wallet Balance</p>
            <div className="balance-figures">
              <p>₦ 360,000.00</p>
              <span className="profit loss">+34.23 (12.10%)</span>
              <span>Today</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Balance;
