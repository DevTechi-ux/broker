import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const Sidebar = ({ open, toggleSidebar, isDarkMode }) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={toggleSidebar}
      sx={{
        "& .MuiDrawer-paper": {
          backgroundColor: isDarkMode ? "#333" : "#fff", // Dark background for dark mode
          color: isDarkMode ? "#fff" : "#000",           // Light text color for dark mode
          width: 80,
          display: "flex",
          
          flexDirection: "column",
          alignItems: "center",
          paddingTop: 2,
          border: "none", // Optional: remove border for a cleaner look
        },
      }}
    >
      <List sx={{ width: "100%", paddingTop: 2 }}>
        {[
          { icon: "bi-house-door", route: "/user/home", name: "Home" },
          { icon: "bi-wallet2", route: "/user/wallet", name: "Wallet" },
          { icon: "bi-lightbulb", route: "/user/strategy", name: "Strategy" },
          { icon: "bi-credit-card", route: "/user/payment", name: "Payment" },
          { icon: "bi-bar-chart", route: "/user/chart", name: "Chart" },
          { icon: "bi-gear", route: "/user/verification", name: "Verification" },
          { icon: "bi-box-arrow-right", route: "/user/logout", name: "Logout" },

        ].map((item, index) => (
          <ListItem
            button
            key={index}
            component={NavLink}
            to={item.route}
            onClick={toggleSidebar}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
              borderRadius: "8px",
              "&:hover": {
                backgroundColor: isDarkMode ? "#444" : "#ddd", // Lighter hover color in dark mode
              },
              "&.active": {
                backgroundColor: isDarkMode ? "#555" : "#ddd", // Active state color
              },
            }}
          >
            <ListItemIcon sx={{ minWidth: "unset" }}>
              <i
                className={`bi ${item.icon}`}
                style={{
                  fontSize: "24px",
                  color: isDarkMode ? "#fff" : "#333", // White icons for dark mode
                }}
              ></i>
            </ListItemIcon>
            {/* <ListItemText primary={item.name} primaryTypographyProps={{ color: "inherit" }} /> */}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
