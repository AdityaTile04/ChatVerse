import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URL);
};

connectDB()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Database connection failed");
  });
