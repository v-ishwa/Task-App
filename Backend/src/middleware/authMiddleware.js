import jwt from "jsonwebtoken";
import pool from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();

const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      const result = await pool.query(
        "SELECT id, name, email FROM users WHERE id = $1",
        [decoded.id]
      );

      if (result.rows.length === 0) 
        return res.status(401).json({ message: "Unauthorized" });

      req.user = result.rows[0];
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "No token provided" });
  }
};

export default protect;
