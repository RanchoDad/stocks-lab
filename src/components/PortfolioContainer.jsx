import React from 'react';
import StockCard from './StockCard';

export default function PortfolioContainer({ portfolioStocks, onSellButtonClick }) {
  const calculateTotalValue = () => {
    let totalValue = 0;
    portfolioStocks.forEach(stock => {
      totalValue += stock.price;
    });
    return totalValue;
  };
  return (
    <div>
      <h2>My Portfolio - Total Value: {calculateTotalValue()}</h2>
      {portfolioStocks.map((stock, idx) => (
        <StockCard
          key={idx}
          stock={stock}
          onButtonClick={onSellButtonClick}
          isPortfolio={true}
        />
      ))}
    </div>
  );
}