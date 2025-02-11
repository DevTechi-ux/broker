const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
// const kycRoutes = require("./routes/kycRoutes"); 

// Connect to Database
dbConnect();

const app = express();
app.use(cors());

// MIDDLEWARES
app.use(express.json()); // For parsing JSON requests

// ROUTES
app.use("/api/auth", authRoutes);
 // Authentication routes
// app.use("/api/kyc", kycRoutes); // KYC-specific routes

app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})
// START THE SERVER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
