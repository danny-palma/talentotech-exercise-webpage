import { IAPIUserInformation } from "../../../types/api-json-types";
import { TableBootcamp, TableUsuario } from "../../../types/database-types";
import Pool from "./sql-conection";

export async function GetUserBasicInfo(id: string) {
  const [rows]:[any[], any] = await Pool.query(
    `
    SELECT 
      u.id AS user_id,
      u.nivel_permisos,
      u.correo,
      u.nombres,
      u.apellidos,
      u.departamento,
      u.localidad,
      u.municipio,
      u.genero,
      u.ruta_imagen_perfil,
      u.numero_documento,
      u.telefono,
      u.fecha_nacimiento,
      u.puntos,
      b.id AS bootcamp_id,
      b.titulo AS bootcamp_titulo,
      b.descripcion AS bootcamp_descripcion,
      bs.id AS session_id,
      bs.titulo AS session_titulo,
      bs.descripcion AS session_descripcion,
      bs.fecha_hora AS session_fecha_hora,
      bs.link_externo AS session_link_externo,
      bs.estado_sesion AS session_estado_sesion,
      sua.id as user_asistencia_id,
      sua.estado_asistencia AS user_asistencia_estado,
      bf.id AS foro_id,
      bf.titulo AS foro_titulo,
      bf.descripcion AS foro_descripcion,
      bf.fecha_creacion AS foro_fecha_creacion,
      bf.estado_foro AS foro_estado_foro,
      ble.id AS link_id,
      ble.link AS link_link,
      ble.texto AS link_texto,
      ble.tipo AS link_tipo,
      ubn.id AS nota_id,
      ubn.concepto AS nota_concepto,
      ubn.nota AS nota_nota
    FROM usuarios u
    LEFT JOIN usuarios_bootcamps_suscripciones ubs ON ubs.id_usuario = u.id
    LEFT JOIN bootcamps b ON b.id = ubs.id_bootcamp
    LEFT JOIN bootcamps_sesiones bs ON bs.id_bootcamp = b.id
    LEFT JOIN sesiones_usuarios_asistencia sua ON sua.id_sesion = bs.id AND sua.id_usuario = u.id
    LEFT JOIN bootcamps_foros bf ON bf.id_bootcamp = b.id
    LEFT JOIN bootcamps_links_externos ble ON ble.id_bootcamp = b.id
    LEFT JOIN usuarios_bootcamps_notas ubn ON ubn.id_bootcamp = b.id AND ubn.id_usuario = u.id
    WHERE u.id = ?
  `,
    [id]
  );

  if (rows.length === 0) {
    return [];
  }

  const user: IAPIUserInformation = {
    id: rows[0].user_id,
    nivel_permisos: rows[0].nivel_permisos,
    correo: rows[0].correo,
    nombres: rows[0].nombres,
    apellidos: rows[0].apellidos,
    departamento: rows[0].departamento,
    localidad: rows[0].localidad,
    municipio: rows[0].municipio,
    genero: rows[0].genero,
    ruta_imagen_perfil: rows[0].ruta_imagen_perfil,
    numero_documento: rows[0].numero_documento,
    telefono: rows[0].telefono,
    fecha_nacimiento: rows[0].fecha_nacimiento,
    puntos: rows[0].puntos,
    bootcamps: new Array(),
  };

  const bootcampsMap: Map<string, IAPIUserInformation["bootcamps"][0]> = new Map();

  rows.forEach((row) => {
    if (!bootcampsMap.has(row.bootcamp_id)) {
      bootcampsMap.set(row.bootcamp_id, {
        id: row.bootcamp_id,
        titulo: row.bootcamp_titulo,
        descripcion: row.bootcamp_descripcion,
        sessions: new Array(),
        forums: new Array(),
        externalLinks: new Array(),
        userNotes: new Array(),
      });
    }

    const bootcamp = bootcampsMap.get(row.bootcamp_id);
    if (!bootcamp) {
      return;
    }

    if (
      row.session_id &&
      !bootcamp.sessions.some((s: any) => s.id === row.session_id)
    ) {
      bootcamp.sessions.push({
        id: row.session_id,
        titulo: row.session_titulo,
        descripcion: row.session_descripcion,
        fecha_hora: row.session_fecha_hora,
        link_externo: row.session_link_externo,
        estado_sesion: row.session_estado_sesion,
        userAsistence: {
          id: row.user_asistencia_id,
          estado_asistencia: row.user_asistencia_estado,
        },
      });
    }

    if (row.foro_id && !bootcamp.forums.some((f) => f.id === row.foro_id)) {
      bootcamp.forums.push({
        id: row.foro_id,
        titulo: row.foro_titulo,
        descripcion: row.foro_descripcion,
        fecha_creacion: row.foro_fecha_creacion,
        estado_foro: row.foro_estado_foro,
      });
    }

    if (
      row.link_id &&
      !bootcamp.externalLinks.some((l) => l.id === row.link_id)
    ) {
      bootcamp.externalLinks.push({
        id: row.link_id,
        link: row.link_link,
        texto: row.link_texto,
        tipo: row.link_tipo,
      });
    }

    if (row.nota_id && !bootcamp.userNotes.some((n) => n.id === row.nota_id)) {
      bootcamp.userNotes.push({
        id: row.nota_id,
        concepto: row.nota_concepto,
        nota: row.nota_nota,
      });
    }
  });

  user.bootcamps = Array.from(bootcampsMap.values());
  return user;
}

export async function CreateNewUser(user: TableUsuario) {
  const [result] = await Pool.query("INSERT INTO usuarios SET ?", user);
  const [newUserResult] = await Pool.query("SELECT * FROM usuarios WHERE id = ?", user.id);
  return newUserResult;
}

export async function CreateNewBootcamp(bootcamp: TableBootcamp) {
  const [result] = await Pool.query("INSERT INTO bootcamps SET ?", bootcamp);
  const [newBootcampResult] = await Pool.query(
    "SELECT * FROM bootcamps WHERE id = ?",
    bootcamp.id
  );
  return newBootcampResult;
}
