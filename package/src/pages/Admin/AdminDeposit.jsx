import React, { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminNavbar from '../../components/Admin/AdminNavar'
import { Outlet } from 'react-router-dom'


const AdminDeposit = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  // Toggle function to open/close the sidebar
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  // Sample deposit data with additional entries
  const [depositsData, setDepositsData] = useState([
    { id: 1, user: "Alice", amount: 500, currency: "USD", date: "2023-09-01", status: "Approved" },
    { id: 2, user: "Bob", amount: 300, currency: "EUR", date: "2023-09-02", status: "Pending" },
    { id: 3, user: "Charlie", amount: 700, currency: "USD", date: "2023-09-03", status: "Rejected" },
    { id: 4, user: "David", amount: 250, currency: "USD", date: "2023-09-04", status: "Pending" },
    { id: 5, user: "Eva", amount: 1000, currency: "EUR", date: "2023-09-05", status: "Approved" },
    { id: 6, user: "Frank", amount: 450, currency: "USD", date: "2023-09-06", status: "Pending" },
    { id: 7, user: "Grace", amount: 600, currency: "USD", date: "2023-09-07", status: "Rejected" },
    { id: 8, user: "Hannah", amount: 350, currency: "USD", date: "2023-09-08", status: "Pending" },
  ]);

  // Update the status of a deposit
  const updateStatus = (id, newStatus) => {
    setDepositsData((prev) =>
      prev.map((d) => (d.id === id ? { ...d, status: newStatus } : d))
    );
  };

  // Handlers for each action
  const handleApprove = (id) => {
    updateStatus(id, "Approved");
  };

  const handleReject = (id) => {
    updateStatus(id, "Rejected");
  };

  const handleMarkPending = (id) => {
    updateStatus(id, "Pending");
  };

  // Function to determine text color based on deposit status
  const getStatusColor = (status) => {
    switch (status) {
      case "Approved":
        return "green";
      case "Pending":
        return "orange";
      case "Rejected":
        return "red";
      default:
        return "inherit";
    }
  };


  return (
    <>
      <div style={{ display: "flex" }}>




        {/* Pass the open state and toggle function to the sidebar */}
        <AdminSidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div style={{ flex: 1 }}>

          {/* Pass toggleSidebar to the navbar so that its toggle button works */}
          <AdminNavbar toggleSidebar={toggleSidebar} />
          <div style={{ padding: 20 }}>
            <Outlet /> {/* Render nested admin routes */}
          </div>
        </div>
      </div>


      <Box sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom>
          User Deposits
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>User</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell>Currency</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {depositsData.map((deposit) => (
                <TableRow key={deposit.id}>
                  <TableCell>{deposit.id}</TableCell>
                  <TableCell>{deposit.user}</TableCell>
                  <TableCell align="right">{deposit.amount}</TableCell>
                  <TableCell>{deposit.currency}</TableCell>
                  <TableCell>{deposit.date}</TableCell>
                  <TableCell sx={{ color: getStatusColor(deposit.status), fontWeight: "bold" }}>
                    {deposit.status}
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" size="small" onClick={() => handleApprove(deposit.id)} sx={{ mr: 1 }}>
                      Approve
                    </Button>
                    <Button variant="contained" size="small" onClick={() => handleReject(deposit.id)} sx={{ mr: 1 }}>
                      Reject
                    </Button>
                    <Button variant="contained" size="small" onClick={() => handleMarkPending(deposit.id)}>
                      Pending
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}


export default AdminDeposit
