import app from "./config/app.js";
import dotenv from "dotenv";
import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import initSocket from "./socket/socket.js";
dotenv.config();


const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

// initialize socket logic
initSocket(io);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});