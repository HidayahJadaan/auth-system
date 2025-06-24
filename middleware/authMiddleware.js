const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  console.log("Authorization header:", authHeader); 
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Not authorized, no token" });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded ID:", decoded.id); 

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      console.log("User not found in DB"); 
      return res.status(401).json({ message: "Not authorized" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("JWT Error:", error.message); 
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = { protect };
