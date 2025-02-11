import React, { useState } from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminNavbar from '../../components/Admin/AdminNavar'
import { Outlet } from 'react-router-dom'


const Pnl = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  // Toggle function to open/close the sidebar
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

    // Dummy data for PnL
    const [pnlData] = useState({
      totalProfit: 5000,
      totalLoss: 2000,
      netPnl: 3000,
    });
  

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
        Profit & Loss (PnL)
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" color="textSecondary">
              Total Profit
            </Typography>
            <Typography variant="h6" sx={{ color: 'green' }}>
              ${pnlData.totalProfit}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" color="textSecondary">
              Total Loss
            </Typography>
            <Typography variant="h6" sx={{ color: 'red' }}>
              ${pnlData.totalLoss}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1" color="textSecondary">
              Net PnL
            </Typography>
            <Typography variant="h6" sx={{ color: pnlData.netPnl >= 0 ? 'green' : 'red' }}>
              ${pnlData.netPnl}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>

  </>
  )
}


export default Pnl
