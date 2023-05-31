import React from 'react';
import StockCard from './StockCard';

export default function StockContainer({stocks, handleStockButtonClick, portfolioStocks = []}) {
  const filteredStocks = stocks.filter(stock => !portfolioStocks.includes(stock));
  const handleBuyButtonClick = stock => {
    if (!portfolioStocks.includes(stock)) {
      handleStockButtonClick(stock);
    }
  };
  return (
    <div>
      <h2>Stocks</h2>
      {filteredStocks.map((stock, idx) => (
        <StockCard 
        key={idx} 
        stock={stock}
        onButtonClick={handleBuyButtonClick}
        isPortfolio={false}
         />
      ))}
    </div>
  );
}
