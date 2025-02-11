import React, { useState } from 'react';
// import LogoutButton from '../auth/Logout';
import { motion } from "framer-motion";
import { Button, Box, Typography, Container } from "@mui/material";
import ChartComponent from "../components/User/ChartComponent";  
import FeatureCard from "../components/User/FeatureCard"; 
import Navbar from "../components/User/Navbar";
import Sidebar from "../components/User/Sidebar";








const UserLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    
    return (
      <>
      <Navbar toggleSidebar={toggleSidebar} />

      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />


      <div className="w-full flex flex-col items-center bg-gray-100"  style={{ marginTop: '100px' }}>
  
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center bg-white py-20 md:py-24 shadow-lg">
        <Container maxWidth="lg" className="text-center">
          <Typography variant="h3" className="text-gray-900 font-bold leading-tight mb-4">
            Welcome to <span className="text-blue-600">StockPip</span>
          </Typography>
          <Typography variant="h5" className="text-gray-700 font-light mb-8">
            Trade smarter with real-time data and AI-powered insights.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="px-8 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300"
            onClick={() => console.log("Start Trading")}
          >
            Get Started
          </Button>
        </Container>
      </section>

      {/* Chart Section */}
      <section className="w-full bg-gray-50 py-16">
        <Container maxWidth="lg" className="text-center">
          <Typography variant="h4" className="text-gray-800 mb-6 font-semibold">
            Live Market Data
          </Typography>
          <ChartComponent />
        </Container>
      </section>

      {/* Features Section */}
      <section className="w-full bg-white py-16">
        <Container maxWidth="lg">
          <Typography variant="h4" className="text-center text-gray-800 mb-12 font-semibold">
            Why Choose StockPip?
          </Typography>
          <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(280px, 1fr))" gap={6} justifyItems="center">
            <FeatureCard title="Zero Commission" description="Trade without extra fees." />
            <FeatureCard title="Real-Time Insights" description="Get instant updates on your stocks." />
            <FeatureCard title="Secure & Reliable" description="Your investments are always safe." />
          </Box>
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 py-16 text-white">
        <Container maxWidth="lg" className="text-center">
          <Typography variant="h4" className="font-semibold mb-8">
            Ready to Invest?
          </Typography>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <Typography variant="h6" className="mb-6 font-light">
              Join thousands of smart investors using StockPip today.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              className="px-8 py-3 rounded-full shadow-xl hover:shadow-2xl transition duration-300"
              onClick={() => console.log("Sign Up")}
            >
              Sign Up Now
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Footer */}
      <section className="w-full bg-gray-900 text-white py-6">
        <Container maxWidth="lg" className="text-center">
          <Typography variant="body2" className="text-gray-400">
            © 2025 StockPip. All rights reserved.
          </Typography>
        </Container>
      </section>
    </div>
    </>
    );
  };


export default UserLayout;
