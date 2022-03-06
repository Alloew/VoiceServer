import { Server } from "socket.io";

const io = new Server({ /* options */ });

io.on("connection", (socket) => {
  io.sockets.emit("join", "Someone");

  socket.on("sendMessage", (name, message) => {
      io.sockets.emit("message", name, message);
  })
});

io.listen(4000);