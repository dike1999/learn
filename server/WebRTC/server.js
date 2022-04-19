/* eslint-disable no-undef */
const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const http_server = http.createServer(app);
const io = new Server(http_server, {
  cors: true,
});
const PORT = 8000;

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Autherization"
  );
  res.header("Access-Control-Allow-Methods", "POST,GET");
  next();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("a user connection", socket.id);
  socket.on("disconnect", () => {
    console.log("user disconnected", socket.id);
  });
  socket.on("chat message", (msg) => {
    console.log(`${socket.id}: ${msg}`);
    io.emit("message", `${socket.id}: ${msg}`);
  });
});

http_server.listen(PORT, () => {
  console.log(`listening on http://127.0.0.1:${PORT}`);
});
