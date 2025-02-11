import React, { useState } from "react";
import { Modal, Button, Box, TextField, Typography, Card, CardContent, Select, MenuItem, InputLabel, FormControl, Grid, Paper } from "@mui/material";
import { AccountBalanceWallet, TransferWithinAStation, AttachMoney } from "@mui/icons-material";

const VirtualPaymentGateway = () => {
  const [balance, setBalance] = useState(1000); // Initial balance
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState(""); // For transfer
  const [openModal, setOpenModal] = useState(false);
  const [transactionType, setTransactionType] = useState(""); // "deposit", "withdraw", "transfer"
  const [paymentMode, setPaymentMode] = useState("bank");
  const [currency, setCurrency] = useState("USD");
  const [receipt, setReceipt] = useState(null);
  const [error, setError] = useState("");

  // Handle modal open/close
  const handleModalOpen = (type) => {
    setTransactionType(type);
    setOpenModal(true);
    setError("");
  };

  const handleModalClose = () => {
    setOpenModal(false);
    setAmount(0);
    setReceiver("");
    setPaymentMode("bank");
    setReceipt(null);
  };

  // Handle Transactions
  const handleTransaction = () => {
    if (amount <= 0) {
      setError("Amount must be greater than zero.");
      return;
    }
    if (transactionType === "withdraw" || transactionType === "transfer") {
      if (amount > balance) {
        setError("Insufficient balance.");
        return;
      }
    }
    if (transactionType === "transfer" && !receiver) {
      setError("Please enter a receiver username.");
      return;
    }
    if (transactionType === "deposit" && !receipt) {
      setError("Please upload a receipt.");
      return;
    }

    setBalance((prev) => (transactionType === "deposit" ? prev + amount : prev - amount));
    handleModalClose();
  };

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", padding: 3 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom color="primary">


          Virtual Payment Gateway
        </Typography>
        <Typography variant="body1" gutterBottom>
          Your Balance: {balance} {currency}
        </Typography>

        <Box display="flex" justifyContent="center" gap={2}>
          <Button
            variant="contained"
            color="success"
            startIcon={<AccountBalanceWallet />}
            onClick={() => handleModalOpen("deposit")}
            sx={{ width: "150px" }}
          >
            Deposit
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<AttachMoney />}
            onClick={() => handleModalOpen("withdraw")}
            sx={{ width: "150px" }}
          >
            Withdraw
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<TransferWithinAStation />}
            onClick={() => handleModalOpen("transfer")}
            sx={{ width: "150px" }}
          >
            Transfer
          </Button>
        </Box>

        {error && <Typography color="error" mt={2} variant="body2">{error}</Typography>}
      </CardContent>

      {/* Modal for Transactions */}
      <Modal open={openModal} onClose={handleModalClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            width: 350,
            borderRadius: "8px",
          }}
        >
          <Typography variant="h6" gutterBottom color="primary">
            {transactionType.charAt(0).toUpperCase() + transactionType.slice(1)} Money
          </Typography>

          {transactionType === "transfer" && (
            <TextField
              label="Receiver Username"
              fullWidth
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              sx={{ marginBottom: 2 }}
            />
          )}

          {transactionType === "deposit" && (
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel>Payment Mode</InputLabel>
              <Select value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
                <MenuItem value="bank">Bank Transfer</MenuItem>
                <MenuItem value="bitcoin">Bitcoin</MenuItem>
                <MenuItem value="paypal">PayPal</MenuItem>
              </Select>
            </FormControl>
          )}

          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Currency</InputLabel>
            <Select value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="INR">INR</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Amount"
            type="number"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            sx={{ marginBottom: 2 }}
          />

          {transactionType === "deposit" && (
            <Box sx={{ marginBottom: 2 }}>
              <Typography variant="body2" gutterBottom>
                Upload Receipt Proof:
              </Typography>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setReceipt(e.target.files[0])}
                style={{ width: "100%", padding: "8px" }}
              />
            </Box>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleTransaction}
            sx={{ marginTop: 2 }}
          >
            Confirm {transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}
          </Button>
        </Box>
      </Modal>
    </Card>
    
  );
};


export default VirtualPaymentGateway;
