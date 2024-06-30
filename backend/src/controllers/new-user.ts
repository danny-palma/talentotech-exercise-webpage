import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { CreateNewUser } from "../sql/queries";
import { v4 as uuidv4 } from "uuid";

export async function newUser(req: Request, res: Response) {
  const {
    correo,
    clave,
    nombres,
    apellidos,
    departamento,
    localidad,
    municipio,
    genero,
    ruta_imagen_perfil,
    numero_documento,
    telefono,
    puntos,
    fecha_nacimiento,
  } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json({ message: "Bad request", errors: errors.array() });
  }
  const newUser = await CreateNewUser({
    id: uuidv4(),
    nivel_permisos: 0,
    correo,
    clave,
    nombres,
    apellidos,
    departamento,
    localidad,
    municipio,
    genero,
    ruta_imagen_perfil,
    numero_documento,
    telefono,
    puntos,
    fecha_nacimiento
  });
  return res.send(newUser);
}
