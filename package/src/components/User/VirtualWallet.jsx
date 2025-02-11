// src/components/VirtualWallet.jsx
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Modal,
  TextField,
} from '@mui/material';
import { AccountBalanceWallet, TransferWithinAStation } from '@mui/icons-material';

const VirtualWallet = () => {
  // Initial wallet balance and transaction history state
  const [balance, setBalance] = useState(1000); // Starting balance: $1000
  const [transactionHistory, setTransactionHistory] = useState([]);

  // Modal state and transaction details
  const [openModal, setOpenModal] = useState(false);
  const [transactionType, setTransactionType] = useState(''); // 'deposit', 'withdraw', or 'transfer'
  const [amount, setAmount] = useState(0);
  const [receiver, setReceiver] = useState(''); // Only used for transfers

  // Open the modal for a given transaction type
  const handleOpenModal = (type) => {
    setTransactionType(type);
    setOpenModal(true);
  };

  // Close the modal and reset input fields
  const handleCloseModal = () => {
    setOpenModal(false);
    setAmount(0);
    setReceiver('');
  };

  // Handle the transaction logic and update wallet balance and history
  const handleTransaction = () => {
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) return;

    if (transactionType === 'deposit') {
      setBalance((prev) => prev + parsedAmount);
      setTransactionHistory((prev) => [
        ...prev,
        { type: 'Deposit', amount: parsedAmount, date: new Date() },
      ]);
    } else if (transactionType === 'withdraw') {
      if (parsedAmount > balance) {
        alert('Insufficient balance for withdrawal.');
        return;
      }
      setBalance((prev) => prev - parsedAmount);
      setTransactionHistory((prev) => [
        ...prev,
        { type: 'Withdrawal', amount: parsedAmount, date: new Date() },
      ]);
    } else if (transactionType === 'transfer') {
      if (parsedAmount > balance) {
        alert('Insufficient balance for transfer.');
        return;
      }
      if (!receiver.trim()) {
        alert('Please specify a receiver.');
        return;
      }
      setBalance((prev) => prev - parsedAmount);
      setTransactionHistory((prev) => [
        ...prev,
        { type: 'Transfer', amount: parsedAmount, receiver, date: new Date() },
      ]);
    }
    handleCloseModal();
  };

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', padding: 2 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>

          Virtual Wallet
        </Typography>
        <Typography variant="h6">Balance: ${balance.toFixed(2)}</Typography>

        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          <Button
            variant="contained"
            color="success"
            startIcon={<AccountBalanceWallet />}
            onClick={() => handleOpenModal('deposit')}
          >
            Deposit
          </Button>
          <Button
            variant="contained"
            color="error"
            startIcon={<AccountBalanceWallet />}
            onClick={() => handleOpenModal('withdraw')}
          >
            Withdraw
          </Button>
          <Button
            variant="contained"
            color="primary"
            startIcon={<TransferWithinAStation />}
            onClick={() => handleOpenModal('transfer')}
          >
            Transfer
          </Button>
        </Box>

        {/* Transaction History */}
        <Box mt={3}>
          <Typography variant="h6">Transaction History</Typography>
          {transactionHistory.length === 0 ? (
            <Typography variant="body2">No transactions yet.</Typography>
          ) : (
            transactionHistory.map((tx, index) => (
              <Box key={index} mb={1}>
                <Typography variant="body2">
                  {tx.date.toLocaleString()} - {tx.type}: ${tx.amount.toFixed(2)}
                  {tx.receiver ? ` to ${tx.receiver}` : ''}
                </Typography>
              </Box>
            ))
          )}
        </Box>
      </CardContent>

      {/* Modal for Deposits, Withdrawals, or Transfers */}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            width: 300,
          }}
        >
          <Typography variant="h6" gutterBottom>
            {transactionType.charAt(0).toUpperCase() + transactionType.slice(1)} Funds
          </Typography>
          {transactionType === 'transfer' && (
            <TextField
              label="Receiver Username"
              fullWidth
              value={receiver}
              onChange={(e) => setReceiver(e.target.value)}
              sx={{ mb: 2 }}
            />
          )}
          <TextField
            label="Amount"
            type="number"
            fullWidth
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleTransaction}
            disabled={parseFloat(amount) <= 0}
          >
            Confirm {transactionType.charAt(0).toUpperCase() + transactionType.slice(1)}
          </Button>
        </Box>
      </Modal>
    </Card>
  );
};



export default VirtualWallet;
