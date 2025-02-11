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


const ManageUsers = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  // Toggle function to open/close the sidebar
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

    // Sample user data
    const [users, setUsers] = useState([
      { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "user", status: "active" },
      { id: 2, name: "Bob Smith", email: "bob@example.com", role: "user", status: "inactive" },
      { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "admin", status: "active" },
      { id: 4, name: "David Lee", email: "david@example.com", role: "user", status: "active" },
      { id: 5, name: "Eva Green", email: "eva@example.com", role: "user", status: "inactive" },
    ]);
  
    // Toggle user status between active and inactive
    const toggleUserStatus = (id) => {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id
            ? { ...user, status: user.status === "active" ? "inactive" : "active" }
            : user
        )
      );
    };
  
    // Delete a user from the list
    const deleteUser = (id) => {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    };
  
    // Function to determine text color based on user status
    const getStatusColor = (status) => {
      return status === "active" ? "green" : "red";
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
        Manage Users
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>ID</strong></TableCell>
              <TableCell><strong>Name</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Role</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
              <TableCell><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell sx={{ color: getStatusColor(user.status), fontWeight: "bold" }}>
                  {user.status}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    onClick={() => toggleUserStatus(user.id)}
                    sx={{ mr: 1 }}
                  >
                    {user.status === "active" ? "Deactivate" : "Activate"}
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
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


export default ManageUsers
