import express from "express";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;

import authRoutes from "./routes/auth.route.js";
import { connectDB } from "./lib/db.js";
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectDB();
});
