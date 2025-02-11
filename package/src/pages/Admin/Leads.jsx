import React, { useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import AdminSidebar from '../../components/Admin/AdminSidebar'
import AdminNavbar from '../../components/Admin/AdminNavar'
import { Outlet } from 'react-router-dom'


const Leads = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);


  // Toggle function to open/close the sidebar
  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  // Sample leads data with additional entries
  const [leads, setLeads] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com", phone: "555-1234", date: "2023-09-01", status: "New" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", phone: "555-5678", date: "2023-09-02", status: "Contacted" },
    { id: 3, name: "Charlie Brown", email: "charlie@example.com", phone: "555-9012", date: "2023-09-03", status: "Qualified" },
    { id: 4, name: "David Lee", email: "david@example.com", phone: "555-3456", date: "2023-09-04", status: "New" },
    { id: 5, name: "Eva Green", email: "eva@example.com", phone: "555-7890", date: "2023-09-05", status: "Rejected" },
    { id: 6, name: "Frank Miller", email: "frank@example.com", phone: "555-1122", date: "2023-09-06", status: "New" },
    { id: 7, name: "Grace Hopper", email: "grace@example.com", phone: "555-3344", date: "2023-09-07", status: "Contacted" },
    { id: 8, name: "Hannah Brown", email: "hannah@example.com", phone: "555-5566", date: "2023-09-08", status: "Qualified" },
  ]);

  // Function to update the status of a lead
  const updateStatus = (id, newStatus) => {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead))
    );
  };

  // Handlers for each action
  const handleContact = (id) => {
    updateStatus(id, "Contacted");
  };

  const handleQualify = (id) => {
    updateStatus(id, "Qualified");
  };

  const handleReject = (id) => {
    updateStatus(id, "Rejected");
  };

  // Function to determine text color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "blue";
      case "Contacted":
        return "orange";
      case "Qualified":
        return "green";
      case "Rejected":
        return "red";
      default:
        return "inherit";
    }
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
        Leads Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell>{lead.id}</TableCell>
                <TableCell>{lead.name}</TableCell>
                <TableCell>{lead.email}</TableCell>
                <TableCell>{lead.phone}</TableCell>
                <TableCell>{lead.date}</TableCell>
                <TableCell sx={{ color: getStatusColor(lead.status), fontWeight: "bold" }}>
                  {lead.status}
                </TableCell>
                <TableCell>
                  <Button variant="contained" size="small" onClick={() => handleContact(lead.id)} sx={{ mr: 1 }}>
                    Contact
                  </Button>
                  <Button variant="contained" size="small" onClick={() => handleQualify(lead.id)} sx={{ mr: 1 }}>
                    Qualify
                  </Button>
                  <Button variant="contained" size="small" onClick={() => handleReject(lead.id)}>
                    Reject
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


export default Leads
