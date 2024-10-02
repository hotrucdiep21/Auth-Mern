import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import cors from "cors"

import authRoutes from "./routes/auth.route.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json()); // allow us to parse incoming request from : req.body
app.use(cookieParser()) // allow us to parse incomming cookie

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on port ${PORT}!`)
})

//mongodb://localhost:27017/