const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static(__dirname + "/"));

http.listen(3000, () => console.log("listening on *:3000"));

const users = [];
io.on("connection", socket => {
  socket.username = `user${Math.round(Math.random() * 100)}`
  users.push(socket.username);
  socket.on("chat message", msg => io.emit("chat message", {message: msg, username: socket.username}));
  socket.on("disconnect", () => {
    users.splice(users.indexOf(socket.username), 1);
  });
});

// const userID = decodeURIComponent(window.location.search);
// alert("userID")
