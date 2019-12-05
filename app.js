const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const path = require("path");

// app.use(express.static('public'));
app.use(express.static(__dirname + "/"));

// app.get("/", function(req, res) {
// 	res.sendFile(path.join(__dirname + '/index.html'));
// })

// app.get('/register', function(req, res) {
//   res.sendFile(path.join(__dirname + '/register.html'));
// });

// app.get('/reset', function(req, res) {
//   res.sendFile(path.join(__dirname + '/reset.html'));
// });


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
