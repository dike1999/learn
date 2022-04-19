/* eslint-disable no-undef */
const https = require("https");
const express = require("express");
const fs = require("fs");
const path = require("path");
const { Server } = require("socket.io");

const options = {
  key: fs.readFileSync(path.resolve(__dirname, "./ssl/im.coderdi.top.key")),
  cert: fs.readFileSync(path.resolve(__dirname, "./ssl/im.coderdi.top.pem")),
};

const app = express();
const https_server = https.createServer(options, app);
const io = new Server(https_server, {
  cors: true,
});
const PORT = 6789;

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

https_server.listen(PORT, "0.0.0.0", () => {
  console.log(`listening on https://127.0.0.1:${PORT}`);
});
