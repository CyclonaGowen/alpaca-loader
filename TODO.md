# Alpaca Loader TODO

## Current Working Features
- Live Alpaca market data
- Candlestick charts
- SMA 20 indicator
- RSI 14 indicator
- Market signal card
- Auto-refresh every 15 seconds
- Watchlist
- Paper trading Buy/Sell
- Live Alpaca account summary
- Open orders panel
- Frontend separated into app.js

---

## Current Project Structure

alpaca-loader/
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── src/
│   └── server.js
├── notes.txt
├── README.md
└── TODO.md

---

## Next Priority Features
1. Portfolio Positions Panel
2. Profit/Loss tracking
3. Trade History
4. MACD indicator
5. Stop loss / Take profit
6. Mobile responsive design
7. Websocket live streaming
8. AI trade scoring
9. Database integration
10. Authentication/login system

---

## Known Issues
- Open Orders requires manual refresh sometimes
- Layout can break if div structure is incorrect
- Prettier stops working when HTML structure breaks

---

## Development Rules
- Save after every stable feature
- Commit frequently with Git
- Test each feature individually
- Keep frontend logic in app.js
- Keep backend routes in server.js
- Avoid duplicate IDs in HTML

---

## Stable Restore Commands

git status
git add .
git commit -m "Stable checkpoint"
git push

---

## Local Run Commands

node src/server.js

Open:
http://localhost:3000