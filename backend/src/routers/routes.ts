import { Router } from "express";
import { getSessionUser } from "../controllers/getsession-user";
import { newUser } from "../controllers/new-user";
import { body } from "express-validator";
import { newBootcamp } from "../controllers/new-bootcamp";
import { RouteNotFound } from "../controllers/404";
import { newBootcampSesion } from "../controllers/new-bootcamp-session";
import { newBootcampNota } from "../controllers/new-bootcamps-nota";
const route = Router();

route.get("/sessionUser", getSessionUser);
route.post(
  "/newuser",
  body("correo").notEmpty().isEmail().escape(),
  body("clave").notEmpty().isStrongPassword().escape(),
  body("nombres").notEmpty().isString().escape(),
  body("apellidos").notEmpty().isString().escape(),
  body("departamento").notEmpty().isString().escape(),
  body("localidad").notEmpty().isString().escape(),
  body("municipio").notEmpty().isString().escape(),
  body("genero").notEmpty().isString().escape(),
  body("ruta_imagen_perfil").notEmpty().isURL().escape(),
  body("numero_documento").notEmpty().isString().escape(),
  body("telefono").notEmpty().isString().escape(),
  body("puntos").notEmpty().isNumeric().escape(),
  body("fecha_nacimiento").notEmpty().isDate().escape(),
  newUser
);

route.post(
  "/newbootcamp",
  body("titulo").notEmpty().isString().escape(),
  body("descripcion").notEmpty().isString().escape(),
  newBootcamp
);

route.post(
  "/newbootcampsession",
  body("id_bootcamp").notEmpty().isString().escape(),
  body("titulo").notEmpty().isString().escape(),
  body("descripcion").notEmpty().isString().escape(),
  body("fecha_hora").notEmpty().isDate().escape(),
  body("link_externo").notEmpty().isURL().escape(),
  body("estado_sesion").notEmpty().isNumeric().escape(),
  newBootcampSesion
);

// METODO POST PARA TABLA USUARIOS NOTAS; Pregunta dani, ¿si el ID usuario tambien tiene la relacion con la base de datos y si tambien hay que aplicarlo el "uuidv4"?
route.post(
  "/usuariobootcampnotas",
  body("id_usuario").notEmpty().isString().escape(),
  body("id_concepto").notEmpty().isString().escape(),
  body("descripcion").notEmpty().isString().escape(),
  body("nota").notEmpty().isNumeric().escape(),
  newBootcampNota
);


route.use(RouteNotFound);
export default route;
