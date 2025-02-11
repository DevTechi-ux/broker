import { Routes, Route, Navigate } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import ScrollToTop from "../layouts/ScrollToTop";
import React, { useState } from 'react';

// import PrivateRoute from "../pages/";

import Home from './Home';
import AboutUs from './AboutUs';
import Pricing from './Pricing';
import BlogList from './BlogList';
import BlogGrid from './BlogGrid';
import BlogDetails from './BlogDetails';
import ContactUs from './ContactUs';
import Login from '../auth/Login';
import Register from '../auth/Register';
import AdminLayout from '../layouts/AdminLayout';
import UserLayout from '../layouts/UserLayout';

import Wallet from "./User/Wallet";
import Strategy from "./User/StrategySubscription";
import Payment from "./User/Payment";
import Verification from "./User/Verification";   
import Chart from "./User/Chart";
import { useAuth } from "../context/AuthContext";
import { createTheme } from "@mui/material";

// import AdminHome from "./Admin/AdminHome";
import Orders from "./Admin/Orders";
import Reports from "./Admin/Reports";
import Leads from "./Admin/Leads";
import AdminDeposit from "./Admin/AdminDeposit";
import ManageUsers from "./Admin/ManageUsers";  
import Abook from "./Admin/Abook";
import Bbook from "./Admin/Bbook";
import Pnl from "./Admin/Pnl";
import Logout from "../auth/Logout";



const PrivateRoute = ({ element, requiredRole }) => {
  const { role } = useAuth();
  return role === requiredRole ? element : <Navigate to="/login" replace />;
};

function route() {
  const { user } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setSidebarOpen((prev) => !prev); // ✅ Toggles sidebar state

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <>
      <CssBaseline />

      <ScrollToTop />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog-list" element={<BlogList />} />
        <Route path="/blog-grid" element={<BlogGrid />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Private Routes */}
        <Route path="/admin/*" element={<PrivateRoute element={<AdminLayout />} requiredRole="admin" />} />
              {/* <Route path="/admin/dashboard" element={<AdminHome />} /> */}
              <Route path="/admin/orders" element={<Orders />} />
              <Route path="/admin/reports" element={<Reports />} />
              <Route path="/admin/leads" element={<Leads />} />
              <Route path="/admin/deposit" element={<AdminDeposit />} />
              <Route path="/admin/manage-users" element={<ManageUsers />} />
              <Route path="/admin/abook" element={<Abook />} />
              <Route path="/admin/bbook" element={<Bbook />} />
              <Route path="/admin/pnl" element={<Pnl />} />
              <Route path="/admin/logout" element={<Navigate to="/login" replace />} />




        <Route path="/user/*" element={<PrivateRoute element={<UserLayout />} requiredRole="user" />} />

        {/* User Routes */}
        <Route path="/user/wallet" element={<PrivateRoute element={<Wallet />} requiredRole="user" />} />
        <Route path="/user/strategy" element={<PrivateRoute element={<Strategy />} requiredRole="user" />} />
        <Route path="/user/payment" element={<PrivateRoute element={<Payment />} requiredRole="user" />} />
        <Route path="/user/chart" element={<PrivateRoute element={<Chart />} requiredRole="user" />} />
        <Route path="/user/verification/" element={<PrivateRoute element={<Verification />} requiredRole="user" />} />
        <Route path="/user/logout" element={<Navigate to="/login" replace />} />

        {/* Redirect unknown routes to Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default route;
