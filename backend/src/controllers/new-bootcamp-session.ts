import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { v4 as uuidv4 } from "uuid";
import { CreateNewSession } from "../sql/queries";

export async function newBootcampSesion(req: Request, res: Response) {
  const {
    id_bootcamp,
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
  const newBootcampSesion = await CreateNewSession({
    id: uuidv4(),
    // Solicitar y generar el id del usuario para la sesion. Pregunta para daniel, el campo id va con la funcion "uuidv4"
    id_bootcamp,
    titulo,
    descripcion,
    fecha_hora,
    link_externo,
    estado_sesion,
    
  });
  return res.json(newBootcampSesion);
}