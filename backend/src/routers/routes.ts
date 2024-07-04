import { Router } from "express";
import { getSessionUser } from "../controllers/getsession-user";
import { newUser } from "../controllers/new-user";
import { body, query } from "express-validator";
import { newBootcamp } from "../controllers/new-bootcamp";
import { RouteNotFound } from "../controllers/404";
import { newBootcampSesion } from "../controllers/new-bootcamp-session";
import { newBootcampNota } from "../controllers/new-bootcamps-nota";
import { getBootcampUsers } from "../controllers/get-bootcamp-users";
const route = Router();

// METODO GET PARA OBTENER INFOMRACION TABLA USUARIOS SESION; Validacion de los campos
route.get("/sessionUser", getSessionUser);

// METODO POST PARA ENVIAR INFORMACION DE "NUEVO USUARIO" TABLA USUARIOS; Validacion de los campos
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

// METODO POST PARA ENVIAR INFORMACION DE "NUEVO BOOTCAMP" TABLA BOOTCAMP; Validacion de los campos
route.post(
  "/newbootcamp",
  body("titulo").notEmpty().isString().escape(),
  body("descripcion").notEmpty().isString().escape(),
  newBootcamp
);

// METODO POST PARA ENVIAR INFORMACION TABLA USUARIOS SESION; Validacion de los campos
route.post(
  "/newbootcampasistencias",
  body("id_bootcamp").notEmpty().isString().escape(),
  body("titulo").notEmpty().isString().escape(),
  body("descripcion").notEmpty().isString().escape(),
  body("fecha_hora").notEmpty().isDate().escape(),
  body("link_externo").notEmpty().isURL().escape(),
  body("estado_sesion").notEmpty().isNumeric().escape(),
  newBootcampSesion
);

// METODO POST PARA TABLA USUARIOS NOTAS; Validacion de los campos
route.post(
  "/usuariobootcampnotas",
  body("id_usuario").notEmpty().isString().escape(),
  body("id_bootcamp").notEmpty().isString().escape(),
  body("id_concepto").notEmpty().isString().escape(),
  body("descripcion").notEmpty().isString().escape(),
  body("nota").notEmpty().isNumeric().escape(),
  newBootcampNota
);

route.get(
  "/bootcampusuarios",
  query("id_bootcamp").notEmpty().isString().escape(),
  getBootcampUsers
);

route.use(RouteNotFound);
export default route;
