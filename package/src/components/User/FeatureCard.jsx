import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const FeatureCard = ({ title, description }) => {
  return (
    <Card sx={{ width: 250, backgroundColor: "#2c3e50", color: "white" }}>
      <CardContent>
        <Typography variant="h6" className="text-center">{title}</Typography>

        <Typography variant="body2" className="text-center">{description}</Typography>
      </CardContent>
    </Card>


  );
};

export default FeatureCard;
