const userModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");

// Middleware to verify token
const verifyToken = (req, res, next) => {
    let token;
    const authHeader = req.headers.authorization || req.headers.Authorization; // Headers are case-insensitive

    if (authHeader && authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({ message: "User is not authorized. Token missing." });
        }

        try {
            // Decode the token and assign the payload to req.user
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            console.log("Decoded user:", req.user);
            next();
        } catch (error) {
            return res.status(400).json({ message: "Invalid token. Authorization failed.", error: error.message });
        }
    } else {
        return res.status(401).json({ message: "User is not authorized. Missing Bearer token." });
    }
};

// Middleware to check if the user is an admin
const isAdmin = async (req, res, next) => {
    try {
        const userId = req.user?.id; // Ensure user ID exists in req.user

        if (!userId) {
            return res.status(401).json({ message: "User ID missing in the token." });
        }

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        if (user.role !== "admin") {
            return res.status(403).json({ message: "Access denied. Only admins can access this route." });
        }

        next();
    } catch (error) {
        return res.status(500).json({ message: "Error in Admin Middleware", error: error.message });
    }
};

module.exports = { verifyToken, isAdmin };
