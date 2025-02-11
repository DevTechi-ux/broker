import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import { Dashboard, AccountBalanceWallet, People, CreditCard, BarChart, Settings, Assignment, Assessment, Logout } from "@mui/icons-material";  

const sidebarItems = [
  { icon: <Dashboard />, route: "/admin/dashboard", name: "Dashboard" },
  { icon: <AccountBalanceWallet />, route: "/admin/deposit", name: "Deposit" },
  { icon: <People />, route: "/admin/manage-users", name: "Manage Users" },
  { icon: <CreditCard />, route: "/admin/abook", name: "Abook" },
  { icon: <BarChart />, route: "/admin/bbook", name: "Bbook" },
  { icon: <Settings />, route: "/admin/pnl", name: "PnL" },
  { icon: <Assignment />, route: "/admin/leads", name: "Leads" },
  { icon: <Assignment />, route: "/admin/orders", name: "Orders" },
  { icon: <Assessment />, route: "/admin/reports", name: "Reports" },
  { icon: <Logout />, route: "/admin/logout", name: "Logout" },
];

const AdminSidebar = ({ open, toggleSidebar }) => {
  return (
    <Drawer anchor="left" open={open} onClose={toggleSidebar}>
      <List>
        {sidebarItems.map((item, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={item.route}
            onClick={toggleSidebar}
            sx={{ color: "inherit", "&:hover": { backgroundColor: "inherit" } }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} primaryTypographyProps={{ color: "inherit" }} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default AdminSidebar;