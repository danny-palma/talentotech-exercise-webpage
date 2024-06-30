import express from "express";

import "dotenv/config";
import route from "./routers/routes";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Reemplaza esto con la URL de tu cliente React
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(route);

app.listen(process.env.PORT, () => {
  console.log("Servidor escuchando en el puerto: ", process.env.PORT);
})
