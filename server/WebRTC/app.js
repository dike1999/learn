/* eslint-disable no-undef */
const https = require("https");
const fs = require("fs");
const express = require("express");
const socketIO = require("socket.io")();
const log4js = require("log4js");

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

const options = {
  key: fs.readFileSync("./ssl/im.coderdi.top.key"),
  cert: fs.readFileSync("./ssl/im.coderdi.top.pem"),
};

const https_server = https.createServer(options, app);
const io = socketIO.listen(https_server);
io.sockets.on("connection", (socket) => {
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
    // io.in(room).emit("joined", room, socket.id);
    // socket.broadcast.emit("leaved", room, socket.id);
  });
});

https_server.listen(5454, "0.0.0.0");
