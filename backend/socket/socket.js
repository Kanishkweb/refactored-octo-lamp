const initSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Join room
    socket.on("join-room", ({ roomId, name }) => {
      socket.join(roomId);
      socket.to(roomId).emit("user-joined", { name });
    });
    // Chat message
    socket.on("send-message", ({ roomId, message, name }) => {
        console.log(roomId,message,name);
      io.to(roomId).emit("receive-message", { message, name });
    });

    // WebRTC signaling
    socket.on("offer", ({ roomId, offer }) => {
      socket.to(roomId).emit("offer", offer);
    });

    socket.on("answer", ({ roomId, answer }) => {
      socket.to(roomId).emit("answer", answer);
    });

    socket.on("ice-candidate", ({ roomId, candidate }) => {
      socket.to(roomId).emit("ice-candidate", candidate);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
  });
};

export default initSocket;
