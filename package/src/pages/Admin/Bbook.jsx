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
} from "@mui/material";
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminNavbar from '../../components/Admin/AdminNavar'
import { Outlet } from 'react-router-dom'


const Bbook = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  // Toggle function to open/close the sidebar
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);
    // Dummy data for Bbook table
    const [data, setData] = useState([
      { id: 1, item: "Service A", bbookMargin: 20.5, date: "2023-09-01" },
      { id: 2, item: "Service B", bbookMargin: 18.0, date: "2023-09-02" },
      { id: 3, item: "Service C", bbookMargin: 22.5, date: "2023-09-03" },
      { id: 4, item: "Service D", bbookMargin: 19.8, date: "2023-09-04" },
      { id: 5, item: "Service E", bbookMargin: 21.3, date: "2023-09-05" },
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
        Bbook Margin
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Item</strong></TableCell>
              <TableCell align="right"><strong>Bbook Margin (%)</strong></TableCell>
              <TableCell><strong>Date</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.item}</TableCell>
                <TableCell align="right">{row.bbookMargin}</TableCell>
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


export default Bbook
