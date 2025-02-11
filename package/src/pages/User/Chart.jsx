
import React, { useState } from 'react';
import ChartComponent from "../../components/User/ChartComponent";
import Navbar from "../../components/User/Navbar";
import Sidebar from "../../components/User/Sidebar";

const Chart = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  return (

    <>
    <Navbar toggleSidebar={toggleSidebar} />

    <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />

    <div style={{ 
      padding: 0, 
      margin: 0, 
      width: "100%", 
      height: "100vh", 
      overflow: "auto",
      marginTop: '100px'
    }}>
      <ChartComponent />
    </div>
    </>
  );
};


export default Chart;

