// src/components/admin/AdminNavbar.jsx
import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const AdminNavbar = ({ toggleSidebar }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={toggleSidebar} aria-label="toggle sidebar">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ marginLeft: 1 }}>
          StockPip  Admin
        </Typography>
      </Toolbar>
    </AppBar>

  );
};

export default AdminNavbar;
