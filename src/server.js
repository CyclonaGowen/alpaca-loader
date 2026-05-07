require("dotenv").config();

const express = require("express");
const path = require("path");
const Alpaca = require("@alpacahq/alpaca-trade-api");

const app = express();
const PORT = 3000;

const alpaca = new Alpaca({
  keyId: process.env.APCA_API_KEY_ID,
  secretKey: process.env.APCA_API_SECRET_KEY,
  paper: true,
});

app.use(express.static(path.join(__dirname, "../public")));

app.get("/api/stocks/:ticker", async (req, res) => {
  try {
    const ticker = req.params.ticker.toUpperCase();

    const bars = alpaca.getBarsV2(ticker, {
      timeframe: "1Day",
      limit: 60,
    });

    const results = [];

    for await (const bar of bars) {
      results.push({
        date: bar.Timestamp,
        open: bar.OpenPrice,
        high: bar.HighPrice,
        low: bar.LowPrice,
        close: bar.ClosePrice,
        volume: bar.Volume,
      });
    }

    res.json({
      ticker,
      data: results,
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
});