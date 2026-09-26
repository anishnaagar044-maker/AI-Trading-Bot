export async function onRequestGet() {
  const stocks = [
    { symbol: "ITC", market: "NSE", price: 266.2 },
    { symbol: "RELIANCE", market: "NSE", price: 1243.9 },
    { symbol: "HDFCBANK", market: "NSE", price: 713.0 },
    { symbol: "NVDA", market: "USA", price: 182.4 },
    { symbol: "MSFT", market: "USA", price: 613.2 },
    { symbol: "AAPL", market: "USA", price: 245.8 }
  ];

  return Response.json(stocks);
}