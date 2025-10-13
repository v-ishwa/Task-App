import express from "express";
import cors from "cors";
import pool from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//test route
// app.get("/", async (req, res) => {
//   try {
//     const result = await pool.query("SELECT NOW()");
//     res.json({
//       message: "server and DB working",
//       time: result.rows[0].now,
//     });
//   } catch (error) {
//     console.log("error in test route", error.message);
//     res.status(500).json({ error: error.message });
//   }
// });

//routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

export default app;