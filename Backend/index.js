import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./Routes/authRoutes.js";
import messageRoutes from "./Routes/messageRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import connectToMongoDb from "./db/ConnectToMongoDb.js";
import { expressServer, app } from "./socket/socket.js";
dotenv.config();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
const port = process.env.PORT || 5000;

connectToMongoDb();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

expressServer.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
