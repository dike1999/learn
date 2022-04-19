/* eslint-disable no-undef */
const http = require("http");
const express = require("express");
const { Server } = require("socket.io");
const log4js = require("log4js");
const PORT = 8000;

log4js.configure({
  appenders: {
    file: {
      type: "file",
      filename: "app.log",
      layout: {
        type: "pattern",
        pattern: "%r %p - %m",
      },
    },
  },
  categories: {
    default: {
      appenders: ["file"],
      level: "debug",
    },
  },
});
const logger = log4js.getLogger();

const app = express();
const http_server = http.createServer(app);

app.all("*", function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  next();
});
app.get("/", function (req, res) {
  res.end("ok");
});

const io = new Server(http_server, {
  cors: true,
});

io.sockets.on("connection", (socket) => {
  console.log("a user connection");

  socket.on("join", (room) => {
    socket.join(room);
    const rooms = io.sockets.adapter.rooms[room];
    const users = Object.keys(rooms.sockets).length;
    logger.log("the number of user in room is: " + users);
    socket.emit("joined", room, socket.id);
    // socket.to(room).emit("joined", room, socket.id); // 除自己以外
    // io.in(room).emit("joined", room, socket.id);
    // socket.broadcast.emit("joined", room, socket.id);
  });

  socket.on("leave", (room) => {
    const rooms = io.sockets.adapter.rooms[room];
    let users = Object.keys(rooms.sockets).length;
    logger.log("the number of user in room is: " + (users - 1));
    socket.leave(room);
    socket.to(room).emit("bye", room, socket.id); // 除自己以外
    socket.emit("leaved", room, socket.id);
    // io.in(room).emit("leaved", room, socket.id);
    // socket.broadcast.emit("leaved", room, socket.id);
  });
});

http_server.listen(PORT, "0.0.0.0", () => {
  console.log(`listening on http://127.0.0.1:${PORT}`);
});
