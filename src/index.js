require("dotenv").config();

const Alpaca = require("@alpacahq/alpaca-trade-api");

const alpaca = new Alpaca({
  keyId: process.env.APCA_API_KEY_ID,
  secretKey: process.env.APCA_API_SECRET_KEY,
  paper: true,
});

async function loadStockData() {
  try {
    const bars = alpaca.getBarsV2("AAPL", {
      timeframe: "1Day",
      limit: 5,
    });

    console.log("Loading AAPL stock data...\n");

    for await (const bar of bars) {
      console.log(bar);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}

loadStockData();