import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminNavbar from '../../components/Admin/AdminNavar'
import { Outlet } from 'react-router-dom'


const Orders = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  // Toggle function to open/close the sidebar
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const [orders, setOrders] = useState([
    { id: 1, customer: "Alice Johnson", amount: 250, date: "2023-09-10", status: "Pending" },
    { id: 2, customer: "Bob Smith", amount: 500, date: "2023-09-11", status: "Completed" },
    { id: 3, customer: "Charlie Brown", amount: 120, date: "2023-09-12", status: "Cancelled" },
    { id: 4, customer: "David Lee", amount: 300, date: "2023-09-13", status: "Pending" },
    { id: 5, customer: "Eva Green", amount: 420, date: "2023-09-14", status: "Pending" },
    { id: 6, customer: "Frank Miller", amount: 360, date: "2023-09-15", status: "Completed" },
  ]);

  // Function to update the status of an order
  const updateOrderStatus = (id, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) => (order.id === id ? { ...order, status: newStatus } : order))
    );
  };

  // Handlers for each action
  const handleComplete = (id) => {
    updateOrderStatus(id, "Completed");
  };

  const handleCancel = (id) => {
    updateOrderStatus(id, "Cancelled");
  };

  const handleMarkPending = (id) => {
    updateOrderStatus(id, "Pending");
  };

  // Function to determine text color based on order status
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "orange";
      case "Completed":
        return "green";
      case "Cancelled":
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
        Admin Orders
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Customer</strong></TableCell>
              <TableCell align="right"><strong>Amount</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell align="right">{order.amount}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell sx={{ color: getStatusColor(order.status), fontWeight: "bold" }}>
                  {order.status}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    size="small"
                    color="success"
                    onClick={() => handleComplete(order.id)}
                    sx={{ mr: 1 }}
                  >
                    Complete
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    color="error"
                    onClick={() => handleCancel(order.id)}
                    sx={{ mr: 1 }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleMarkPending(order.id)}
                  >
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


export default Orders
