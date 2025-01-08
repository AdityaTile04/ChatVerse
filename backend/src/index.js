import express from "express";
import authRoutes from "./routes/auth.route.js";
const port = 3000;

const app = express();

app.use("/api/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
