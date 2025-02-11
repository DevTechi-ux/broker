
import React, { useState } from 'react';
import VirtualPaymentGateway from '../../components/User/VirtualPaymentGateway';
import Navbar from '../../components/User/Navbar';
import Sidebar from '../../components/User/Sidebar';  

const Payment = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (

    <>
    <Navbar toggleSidebar={toggleSidebar} />

    <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    <div style={{ marginTop: '100px' }}>



    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ marginBottom: '20px' }}>Payment</h1>
      <VirtualPaymentGateway />
    </div>
    </div>
    </>

  );
};


export default Payment;

