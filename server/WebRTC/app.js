/* eslint-disable no-undef */
const https = require("https");
const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

const options = {
  key: fs.readFileSync(path.resolve(__dirname, "./ssl/im.coderdi.top.key")),
  cert: fs.readFileSync(path.resolve(__dirname, "./ssl/im.coderdi.top.pem")),
};

https.createServer(options, app).listen(443, "0.0.0.0");
