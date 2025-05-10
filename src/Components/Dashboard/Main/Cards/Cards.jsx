import React from 'react'
import './Cards.css'
import mastercard from '../../../../Assets/icons8-mastercard-48.png'

const Cards = () => {
    const cards = [
      {
        bankName: "Kayvee Microfinance Bank",
        cardNumber: "4676 3514 8297 1524",
        numberText: "Card Number",
        userName: "Shaka-Momodu Breakthrough",
      },
      {
        bankName: "Kayvee Microfinance Bank",
        cardNumber: "4676 3514 8297 1524",
        numberText: "Card Number",
        userName: "Shaka-Momodu Breakthrough",
      }
    ];

    return (
      <div className="card-container">
        {cards.map(({ bankName, cardNumber, numberText, userName }, i) => (
          <div key={i} className={`card card${i + 1}`}>
            <h2
              className="bankName"
              style={{
                fontSize: "16px",
                fontWeight: "400",
                marginTop: "10px",
              }}
            >
              {bankName}
            </h2>
            <p
              className="cardNumber"
              style={{
                fontSize: "22px",
                fontWeight: "400",
                letterSpacing: "2px",
                marginTop: "20px",
                marginBottom: "-20px",
              }}
            >
              {cardNumber}
            </p>
            <div className="cardflex">
              <div className="card-text">
                <span
                  className="number-text"
                  style={{
                    fontSize: "10px",
                    fontWeight: "lighter",
                  }}
                >
                  {numberText}
                </span>
                <p
                  className="userName"
                  style={{
                    marginTop: "10px",
                    fontSize: "14px",
                    fontWeight: "400",
                  }}
                >
                  {userName}
                </p>
              </div>
              <div className="card-logo">
                <img src={mastercard} alt="mastercard logo" />
                <span>Mastercard</span>
              </div>
            </div>
          </div>
        ))}
        <div className="add-card">
          <span className="plus">+</span>
          <span>Add card</span>
        </div>
      </div>
    );
}

export default Cards

