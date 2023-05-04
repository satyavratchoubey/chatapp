const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  }
});


io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error('Invalid username'));
  }
  socket.username = username;
  socket.userId = uuidv4();
  next();
});

io.on('connection', async (socket) => {
  console.log(`User ${socket.username} connected with ID ${socket.id}`);
  const users = [];
  for (let [id, socket] of io.of('/').sockets) {
    users.push({
      userId: socket.userId,
      username: socket.username
    })
  }

  socket.emit('users', users);

  socket.emit('session', { userId: socket.userId, username: socket.username });
  socket.broadcast.emit("user connected",
  { userId: socket.userId, username: socket.username});


  socket.on("new message",(Message)=>{
    socket.broadcast.emit("new message",{
      userId:socket.userId,
      username:socket.username,
      Message
    })
  })
});

// Add this line to allow any origin to connect to the Socket.IO server
// io.origins('*:*');

server.listen(process.env.PORT || 5000, () => {
  console.log('Listening on port 5000');
});
