import React, { useState } from 'react'
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminNavbar from '../../components/Admin/AdminNavar'
import { Outlet } from 'react-router-dom'

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
} from "@mui/material";

const Abook = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Toggle function to open/close the sidebar
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
  // Dummy data for Abook table
  const [data, setData] = useState([
    { id: 1, item: "Product A", abookMargin: 12.5, date: "2023-09-01" },
    { id: 2, item: "Product B", abookMargin: 15.0, date: "2023-09-02" },
    { id: 3, item: "Product C", abookMargin: 8.0, date: "2023-09-03" },
    { id: 4, item: "Product D", abookMargin: 10.2, date: "2023-09-04" },
    { id: 5, item: "Product E", abookMargin: 14.7, date: "2023-09-05" },
  ]);
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
        Abook Margin
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Item</strong></TableCell>
              <TableCell align="right"><strong>Abook Margin (%)</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.item}</TableCell>
                <TableCell align="right">{row.abookMargin}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>

  </>
  )
}


export default Abook
