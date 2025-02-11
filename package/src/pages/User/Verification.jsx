
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material'
import ProfileVerification from '../../components/User/ProfileVerification'
import Navbar from '../../components/User/Navbar';
import Sidebar from '../../components/User/Sidebar';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (
    <>
    <Navbar toggleSidebar={toggleSidebar} />

    <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />

    <div style={{ marginTop: '100px' }}>  

    <ProfileVerification />
    </div>
    </>
    

  )
}

export default Settings