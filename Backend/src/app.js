import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

const app = express();

//middleware
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

//routes
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

app.post('/test', (req, res) => {
  res.json({ message: 'Test route working', body: req.body });
});

export default app;
