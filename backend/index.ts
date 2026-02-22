import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const port = 8080;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:5173",
  },
});

io.on("connection", (socket) => {
  socket.on("texts", (data) => {
    console.log(data);
  });
});

httpServer.listen(port, () => {
  console.log("Server started at port ", port);
});
