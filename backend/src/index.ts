import express from "express";

import "dotenv/config";

const app = express();

app.listen(process.env.PORT, () => {
  console.log("Servidor escuchando en el puerto: ", process.env.PORT);
})