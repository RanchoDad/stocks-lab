import React from 'react';
import{ useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import StockContainer from './components/StockContainer';
import PortfolioContainer from './components/PortfolioContainer';
import './index.css';

export default function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolioStocks, setPortfolioStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);


  useEffect(() => {
    fetchStocks()
  }, []);
  function fetchStocks() {
    fetch('http://localhost:3001/stocks')
      .then(response => response.json())
      .then(data => {
        setStocks(data);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  function handleStockButtonClick(stock) {
    setPortfolioStocks(prevPortfolioStocks => [...prevPortfolioStocks, stock]);
  }
  function handleSellButtonClick(stock) {
    setPortfolioStocks(prevPortfolioStocks =>
      prevPortfolioStocks.filter(item => item !== stock)
    );
  }
  const filteredStocks = stocks.filter(
    stock => !portfolioStocks.find(item => item.ticker === stock.ticker)
  );
  return (
    <main>
      <Header />
      <div className="row">
        <div className="col-6">
        <StockContainer 
         stocks={filteredStocks}
         handleStockButtonClick={handleStockButtonClick}
         portfolioStocks={portfolioStocks}

         />
        </div>
        <div className="col-6">
          <PortfolioContainer 
          portfolioStocks={portfolioStocks}
          onSellButtonClick={handleSellButtonClick}
          />
        </div>
      </div>
    </main>
  );
}

