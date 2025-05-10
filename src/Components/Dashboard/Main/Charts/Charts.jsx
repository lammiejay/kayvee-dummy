import React, { useState } from 'react';
import './Charts.css'
import Chart from './Chart/Chart';
import { RxCaretDown } from "react-icons/rx";

const Charts = () => {
  const [activeClass, setActiveClass] = useState("expenses");

  const handleClick = (link) => {
    setActiveClass(link);
  }
  
  return (
    <div className="charts">
      <div className="chart-nav">
        <span style={{ marginBottom: "10px" }}>Payment Chart</span>
        <div className="chart-options">
          <div className="chart-types">
            <button className={`chart-button ${activeClass === "expenses" ? "activeClass" : ""}`}
            onClick={() => handleClick("expenses")}
            >
              Expenses
            </button>
            <button className={`chart-button ${activeClass === "income" ? "activeClass" : ""}`}
            onClick={() => handleClick("income")}
            >Income</button>
          </div>
          <button className="dropdown-button">Weekly    <RxCaretDown />
          </button>
        </div>
      </div>
      <Chart />
    </div>
  );
}

export default Charts
