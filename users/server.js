const express = require("express");

const server = express();

const User = require("../users/users-model.js");

server.use(express.json());

server.get("/", (req, res) => {
  res.json("Welcome to my API");
});

server.get("/api/users", (req, res) => {
  User.find()
    .then((users) => {
      res.json(users);
    })
    .catch(() => {
      res
        .status(500)
        .json({ message: "The users information could not be retrieved" });
    });
});

server.post("/api/register", (req, res) => {
  const body = req.body;
  User.insert(body)
    .then((user) => {
      console.log(user);
      res.status(201).json(user);
    })
    .catch(() => {
      res.status(500).json({
        message: "There was an error while saving the user to the database",
      });
    });
});

server.post("/api/login", (req, res) => {
  if (!req.body.username || !req.body.password) {
    res
      .status(400)
      .json({ message: "Please provide username and password for the user" });
    return;
  } else {
    res.json({ message: `Welcome ${req.body.username}!` });
  }
});

module.exports = server;
