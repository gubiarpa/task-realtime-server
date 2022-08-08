import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http";
import cors from "cors";

import { PORT } from "./config.js";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
    cors: {
        origin: 'http://127.0.0.1:2907'
    }
});

app.use(cors());
app.use(morgan("dev"));

io.on("connection", (socket) => {
    console.log(`A user connected with id: ${socket.id}`);
    socket.on("message", (message) => {
        console.log(`${socket.id} sends: ${JSON.stringify(message)}`);
        socket.broadcast.emit("message", message);
    });
});

server.listen(PORT);
console.log(`Server started on port ${PORT}`);