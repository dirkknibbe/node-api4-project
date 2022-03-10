require("dotenv").config();

const PORT = process.env.PORT || 9000;

const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.end("<h1>hello world<h1>");
});

server.listen(PORT, () => {
  console.log("here is my qwerty variable: ", process.env.QWERTY);
  console.log(
    `server is running on port ${PORT}, user is ${process.env.USER}!`
  );
});
