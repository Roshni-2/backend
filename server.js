import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect("mongodb+srv://roshni_db_user:Roshan2@Mern.4xfitnp.mongodb.net/MernDB")
.then(console.log("MongoDB Connected"))
.catch((error) => console.log(error))

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
