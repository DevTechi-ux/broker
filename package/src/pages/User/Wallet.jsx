import React, { useState } from 'react'; 
import VirtualWallet from '../../components/User/VirtualWallet';
import Navbar from '../../components/User/Navbar';
import Sidebar from '../../components/User/Sidebar';

const Wallet = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div style={{ padding: '20px', marginTop: '100px' }}>
        <VirtualWallet />
      </div>
    </>
  );
};

export default Wallet;