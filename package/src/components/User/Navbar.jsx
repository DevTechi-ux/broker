import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Navbar = ({ toggleTheme, darkMode, toggleSidebar }) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        {/* Sidebar Toggle Button */}
        <IconButton edge="start" color="inherit" onClick={toggleSidebar} >
          <MenuIcon />
        </IconButton>

        {/* Navbar Title */}
        <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 1 }}>
          STOCKPIP
        </Typography>

        {/* Dark Mode Toggle */}
        <IconButton color="inherit" onClick={toggleTheme}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
