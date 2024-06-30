//import express from "express";

//import "dotenv/config";
//import { SocketProvider } from './components/ConexionBack/SocketContext'; //se importa la libreria y modificamos esta parte del codigo del mismo archivo,
// const app = express();

// app.listen(process.env.PORT, () => {
//   console.log("Servidor escuchando en el puerto: ", process.env.PORT);
// })


const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // servidor cliente
    methods: ["GET", "POST"],
  }
});

io.on("connection", (socket) => {
  console.log(`Usuario conectado: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`Usuario desconectado: ${socket.id}`);
  });
});

server.listen(5174, () => {
  console.log("Servidor corriendo en http://localhost:5174");
});




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <SocketProvider>
//       <RouterProvider router={router} />
//     </SocketProvider>
//   </React.StrictMode>
// );

