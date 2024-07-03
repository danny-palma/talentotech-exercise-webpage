import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { v4 as uuidv4 } from "uuid";
import { CreateNewBootcamp } from "../sql/queries";

export async function newBootcamp(req: Request, res: Response) {
  const {
    id,
    titulo,
    descripcion,
    fecha_hora,
    link_externo,
    estado_sesion,
  } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Bad request", errors: errors.array() });
  }
}
