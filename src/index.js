require("dotenv").config();

const Alpaca = require("@alpacahq/alpaca-trade-api");

const alpaca = new Alpaca({
  keyId: process.env.APCA_API_KEY_ID,
  secretKey: process.env.APCA_API_SECRET_KEY,
  paper: true,
});

const ticker = process.argv[2] || "AAPL";

async function loadStockData() {
  try {
    console.log(`Fetching stock data for ${ticker}...\n`);

    const bars = alpaca.getBarsV2("AAPL", {
      timeframe: "1Day",
      limit: 5,
    });
    
    for await (const bar of bars) {
      console.log({
        date: bar.Timestamp,
        open: bar.OpenPrice,
        high: bar.HighPrice,
        low: bar.LowPrice,
        close: bar.ClosePrice,
        volume: bar.Volume,
      });
    }

  } catch (error) {
    console.error("Error:", error.message);
  }
}

loadStockData();