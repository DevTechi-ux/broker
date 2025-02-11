import React, { useState } from 'react'
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminNavbar from '../../components/Admin/AdminNavar'
import { Outlet } from 'react-router-dom'
import {
  Box,
  Typography,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";


const Reports = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  // Toggle function to open/close the sidebar
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  const [reports, setReports] = useState([
    { id: 1, date: "2023-09-01", orders: 25, revenue: 5000, profit: 1500 },
    { id: 2, date: "2023-09-02", orders: 30, revenue: 6000, profit: 2000 },
    { id: 3, date: "2023-09-03", orders: 20, revenue: 4000, profit: 1000 },
    { id: 4, date: "2023-09-04", orders: 35, revenue: 7000, profit: 2500 },
    { id: 5, date: "2023-09-05", orders: 40, revenue: 8000, profit: 3000 },
    { id: 6, date: "2023-09-06", orders: 28, revenue: 5600, profit: 1800 },
    { id: 7, date: "2023-09-07", orders: 32, revenue: 6400, profit: 2200 },
    { id: 8, date: "2023-09-08", orders: 38, revenue: 7600, profit: 2600 },
  ]);
  const handleRefreshReports = () => {
    console.log("Refreshing reports...");
    // Here you would typically fetch updated report data from an API.
    // For now, we'll simply log the action.
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
          Reports
        </Typography>
        <Button variant="contained" color="primary" onClick={handleRefreshReports} sx={{ mb: 2 }}>
          Refresh Reports
        </Button>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell align="right"><strong>Orders</strong></TableCell>
                <TableCell align="right"><strong>Revenue ($)</strong></TableCell>
                <TableCell align="right"><strong>Profit ($)</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>{report.date}</TableCell>
                  <TableCell align="right">{report.orders}</TableCell>
                  <TableCell align="right">{report.revenue}</TableCell>
                  <TableCell align="right">{report.profit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </>
  )
}


export default Reports
