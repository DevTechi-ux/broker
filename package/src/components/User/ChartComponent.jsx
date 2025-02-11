import React, { useState, useEffect } from "react";
import { Modal, Button, Box, TextField, Typography, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import { ShoppingCart, Sell } from "@mui/icons-material";
import { Tabs, Tab } from "@mui/material";

// Market symbols for demonstration
const markets = {
  forex: [
    { name: "EUR/USD", symbol: "FX:EURUSD" },
    { name: "GBP/USD", symbol: "FX:GBPUSD" },
    { name: "USD/JPY", symbol: "FX:USDJPY" },
  ],
  crypto: [
    { name: "BTC/USD", symbol: "BINANCE:BTCUSDT" },
    { name: "ETH/USD", symbol: "BINANCE:ETHUSDT" },
  ],
  stocks: [
    { name: "Apple Inc.", symbol: "NASDAQ:AAPL" },
    { name: "Tesla Inc.", symbol: "NASDAQ:TSLA" },
  ],
};

const TradingPanel = () => {
  const [selectedChart, setSelectedChart] = useState("forex");
  const [selectedSymbol, setSelectedSymbol] = useState(markets.forex[0].symbol);
  const [openModal, setOpenModal] = useState(false);
  const [transactionType, setTransactionType] = useState("");
  const [amount, setAmount] = useState(0);
  const [transactions, setTransactions] = useState([]);

  // Embed TradingView Chart
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": selectedSymbol,
      "theme": "light",
      "width": "100%",
      "height": 500,
      "interval": "D",
      "timezone": "Etc/UTC",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "hide_side_toolbar": false,
      "allow_symbol_change": true,
    });
    document.getElementById("tradingview_chart").innerHTML = "";
    document.getElementById("tradingview_chart").appendChild(script);
  }, [selectedSymbol]);

  // Handle Buy/Sell Transaction
  const handleTransaction = () => {
    setTransactions([...transactions, { type: transactionType, symbol: selectedSymbol, amount }]);
    setOpenModal(false);
    setAmount(0);
  };

  return (
    <Card sx={{ maxWidth: 1000, margin: "auto", padding: 2, textAlign: "center" }}>
      <Tabs value={selectedChart} onChange={(e, newValue) => setSelectedChart(newValue)}>
        <Tab value="forex" label="Forex" />
        <Tab value="crypto" label="Crypto" />
        <Tab value="stocks" label="Stocks" />
      </Tabs>

      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        {/* Market List */}
        <Box sx={{ width: 200, borderRight: "1px solid #ddd" }}>
          <Typography variant="h6">Markets</Typography>
          <List>
            {markets[selectedChart].map((market) => (
              <ListItem button key={market.symbol} onClick={() => setSelectedSymbol(market.symbol)}>
                <ListItemText primary={market.name} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* TradingView Chart */}
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h6">Live Market Chart</Typography>
          <div id="tradingview_chart" style={{ height: 500 }}></div>
          <Box mt={2} display="flex" justifyContent="center" gap={2}>
            <Button
              variant="contained"
              color="success"
              startIcon={<ShoppingCart />}
              onClick={() => { setTransactionType("buy"); setOpenModal(true); }}
            >
              Buy
            </Button>
            <Button
              variant="contained"
              color="error"
              startIcon={<Sell />}
              onClick={() => { setTransactionType("sell"); setOpenModal(true); }}
            >
              Sell
            </Button>
          </Box>
        </CardContent>
      </Box>

      {/* Transaction Modal */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", bgcolor: "white", p: 4, boxShadow: 24 }}>
          <Typography variant="h6">{transactionType === "buy" ? "Buy" : "Sell"} {selectedSymbol}</Typography>
          <TextField label="Amount" type="number" fullWidth value={amount} onChange={(e) => setAmount(e.target.value)} sx={{ my: 2 }} />
          <Button variant="contained" fullWidth onClick={handleTransaction} disabled={amount <= 0}>
            Confirm {transactionType}
          </Button>
        </Box>
      </Modal>

      {/* Transaction History */}
      <Box sx={{ mt: 3, textAlign: "left" }}>
        <Typography variant="h6">Transaction History</Typography>
        <List>
          {transactions.map((tx, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${tx.type.toUpperCase()} ${tx.amount} USD in ${tx.symbol}`} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Card>
  );
};

export default TradingPanel;
