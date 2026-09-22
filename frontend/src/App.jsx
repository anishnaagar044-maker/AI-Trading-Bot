import { useState } from "react";
import "./App.css";

const stocks = [
  { symbol: "ITC", market: "NSE", price: 266.2, score: 78, signal: "BUY" },
  { symbol: "RELIANCE", market: "NSE", price: 1243.9, score: 72, signal: "WATCH" },
  { symbol: "HDFCBANK", market: "NSE", price: 713.0, score: 60, signal: "WATCH" },
  { symbol: "NVDA", market: "USA", price: 182.4, score: 92, signal: "BUY" },
  { symbol: "MSFT", market: "USA", price: 613.2, score: 89, signal: "BUY" },
  { symbol: "AAPL", market: "USA", price: 245.8, score: 82, signal: "BUY" }
];

export default function App() {
  const [selected, setSelected] = useState(stocks[0]);

  return (
    <div className="app">
      <div className="top">
        <div>
          <h1>🤖 AI Trading Bot</h1>
          <p>India + USA • Paper Trading</p>
        </div>
        <div className="safe">SAFE</div>
      </div>

      <div className="cards">
        <div className="card">
          <small>Capital</small>
          <h2>₹5,000</h2>
        </div>
        <div className="card">
          <small>Risk</small>
          <h2>₹50</h2>
        </div>
      </div>

      <h3>AI Scanner</h3>

      {stocks.map((s) => (
        <div
          key={s.symbol}
          className="stock"
          onClick={() => setSelected(s)}
        >
          <div>
            <b>{s.symbol}</b>
            <p>{s.market}</p>
          </div>

          <div className="right">
            <h3>{s.score}</h3>
            <span className={s.signal}>{s.signal}</span>
          </div>
        </div>
      ))}

      <div className="detail">
        <h2>{selected.symbol}</h2>
        <p>{selected.market}</p>

        <h1>{selected.market === "NSE" ? "₹" : "$"} {selected.price}</h1>

        <h3>AI Score : {selected.score}</h3>

        <button>📒 PAPER BUY</button>
      </div>
    </div>
  );
}