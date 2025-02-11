// src/pages/StrategySubscription.jsx
import React, { useState } from 'react';
import {  Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useAuth } from "../../context/AuthContext";
import StrategyCard from '../../components/User/StrategyCard';
import Navbar from '../../components/User/Navbar';
import Sidebar from '../../components/User/Sidebar';

// Sample strategies data

const strategies = [
  {
    id: 1,
    title: 'Mean Reversion',
    description: 'This algorithm buys when prices are low and sells when prices are high.',
    price: 49,
  },
  {
    id: 2,
    title: 'Momentum Trading',
    description: 'This strategy capitalizes on upward or downward market trends.',
    price: 69,
  },
  {
    id: 3,
    title: 'Arbitrage',
    description: 'This strategy exploits price differences across markets.',
    price: 89,
  },
];

const StrategySubscription = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);  
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  const [subscribedStrategies, setSubscribedStrategies] = useState([]);



  const handleSubscribe = (strategyId) => {
    if (!subscribedStrategies.includes(strategyId)) {
      setSubscribedStrategies([...subscribedStrategies, strategyId]);
      // In a real-world scenario, call your payment API here before updating the state.
    }
  };

  return (
    <>
    <Navbar toggleSidebar={toggleSidebar} />

    <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
    <div style={{ marginTop: '100px' }}>
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>


        Algo Trading Strategies
      </Typography>
      <Grid container spacing={2}>
        {strategies.map((strategy) => (
          <Grid item xs={12} sm={6} md={4} key={strategy.id}>
            <StrategyCard
              title={strategy.title}
              description={strategy.description}
              price={strategy.price}
              subscribed={subscribedStrategies.includes(strategy.id)}
              onSubscribe={() => handleSubscribe(strategy.id)}
            />
          </Grid>
        ))}
        </Grid>
    </div>
    </div>
    </>
  );

};


export default StrategySubscription;
