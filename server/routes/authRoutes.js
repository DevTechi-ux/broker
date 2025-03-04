const express =require("express");
const { register, login, getMe } = require("../controllers/authController");  // Import getMe
const { verifyToken, isAdmin } = require("../middlewares/authMiddleware");  
const router =express.Router();

router.post("/register",register);
router.post("/login",login);
router.get("/me", verifyToken, getMe);  

module.exports=router;
