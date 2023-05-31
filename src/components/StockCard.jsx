import React from 'react';
import { useState } from 'react';

export default function StockCard({stock, onButtonClick, isPortfolio}) {
  const [isBuyClicked, setIsBuyClicked] = useState(false);
  const handleButtonClick = () => {
    setIsBuyClicked(!isBuyClicked);
    if (onButtonClick) {
      onButtonClick(stock);
    }
  };
  const buttonText = isPortfolio ? 'SELL' : 'BUY';
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{stock.name}</h5>
        <p className="card-text">{stock.ticker}</p>
        <p className="card-text">{stock.price}</p>
        <button onClick={handleButtonClick}>{buttonText}</button>
      </div>
    </div>
  );
}
