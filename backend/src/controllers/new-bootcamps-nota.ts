import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { v4 as uuidv4 } from "uuid"; 
import { CreateNewNota } from "../sql/queries";

export async function newBootcampNota(req: Request, res: Response) {
  const {
    id_usuario,
    id_bootcamp,
    id_concepto,
    descripcion,
    nota
  } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Bad request", errors: errors.array() });
  }
  const newBootcampNota = await CreateNewNota({
    id: uuidv4(),
       id_usuario,
    id_bootcamp,
    id_concepto,
    descripcion,
    nota
    
  });
  return res.json(newBootcampNota);
}