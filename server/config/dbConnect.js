const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(1); // Exit with failure
    }
};

module.exports = dbConnect;
