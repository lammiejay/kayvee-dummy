import React from 'react';
import './Main.css';
import { IoIosSend } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { IoReceiptOutline } from "react-icons/io5";
import Balance from './Balance/Balance';
import Cards from './Cards/Cards';
import Charts from './Charts/Charts';
import Transactions from './Transactions/Transactions';

const Main = () => {
  return (
    <div className="main-section">
      <section className="top">
        <Balance />
        <div className="quick-actions">
          <span>QUICK ACTIONS</span>
          <div className="action-buttons">
            <button>
              <IoIosSend /> Transfer
            </button>
            <button>
              <FaPhone /> Airtime
            </button>
            <button>
              <IoReceiptOutline /> Bills
            </button>
          </div>
        </div>
      </section>

      <section className="middle-section">
        <div className="card-section">
          <span>My Card</span>
          <Cards />
        </div>
        <div className="chart-section">
          <Charts />
        </div>
      </section>

      <section className="bottomm-section">
        <Transactions />
      </section>
    </div>
  );
}

export default Main
