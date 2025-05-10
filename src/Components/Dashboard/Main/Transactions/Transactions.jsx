import React from 'react';
import './Transactions.css';
import { FaArrowRightLong } from "react-icons/fa6";

const Transactions = () => {
  const recentTransactions = [
    {
      color: "green",
      assetName: "Non Payroll May 2025",
      date: "23/08/2025 . 09:00PM",
      amount: "₦6,000",
      status: "Successful",
    },
    {
      color: "red",
      assetName: "Payment of Salary",
      date: "23/08/2025 . 09:00PM",
      amount: "₦6,000",
      status: "In Progress",
    },
    {
      color: "orange",
      assetName: "Trans to Abdulquareem",
      date: "23/08/2025 . 09:00PM",
      amount: "₦6,000",
      status: "In Progress",
    },
  ];

  return (
    <div className="transactions-container">
      <div className="trans-header">
        <span>Recent Transactions</span>
        <button className="viewAll-button">
            View All 
            <FaArrowRightLong/>
        </button>
      </div>
      <table style={{width: "100%"}}>
        <tr className="table-headers">
            <th >Asset's Name</th>
            <th >Date</th>
            <th >Amount</th>
            <th >Status</th>
        </tr>
        {recentTransactions.map(({ color, assetName, date, amount, status }, i) => (
          <tr className="table-cells">
            <td style={{display: "flex", alignItems: "center", gap: "10px", padding: "5px", paddingLeft: "0"}}>
              <div className="round-color" style={{backgroundColor: `${color}`}} />
              <span className="assetName">{ assetName }</span>
            </td>
            <td >
              <span className="date">{ date }</span>
            </td>
            <td >
              <span className="amount">{ amount }</span>
            </td>
            <td >
              <span className={`status ${status}`}> 
                {status}
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default Transactions
