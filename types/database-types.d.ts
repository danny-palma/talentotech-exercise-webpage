export type permissions_levels = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

// Tabla bootcamps
export type TableBootcamp = {
  id: string;
  titulo: string;
  descripcion: string;
};

// Tabla bootcamps_foros
export type TableBootcampForo = {
  id: string;
  id_bootcamp: string;
  titulo: string;
  descripcion: string;
  fecha_creacion: string; // 'YYYY-MM-DD' format
  estado_foro: permissions_levels; // values from 0 to 9
};

// Tabla bootcamps_links_externos
export type TableBootcampLinkExterno = {
  id: string;
  id_bootcamp: string;
  link: string;
  texto: string;
  tipo: string;
};

// Tabla bootcamps_mentorias
export type TableBootcampMentoria = {
  id: string;
  id_bootcamp: string;
  link_agendar_mentoria: string;
  link_grabaciones_mentoria: string;
};

// Tabla bootcamps_sesiones
export type TableBootcampSesion = {
  id: string;
  id_bootcamp: string;
  titulo: string;
  descripcion: string;
  fecha_hora: string; // 'YYYY-MM-DDTHH:MM:SS' format
  link_externo: string;
  estado_sesion: string;
};

// Tabla foros_entradas_respuestas
export type TableForoEntradaRespuesta = {
  id: string;
  id_usuario: string;
  id_entrada: string;
  descripcion: string;
  fecha_hora: string; // 'YYYY-MM-DDTHH:MM:SS' format
};

// Tabla sesiones_usuarios_asistencia
export type TableSesionUsuarioAsistencia = {
  id: string;
  id_usuario: string;
  id_sesion: string;
  estado_asistencia: permissions_levels; // values from 0 to 9
};

// Tabla usuarios
export type TableUsuario = {
  id: string;
  nivel_permisos: permissions_levels; // values from 0 to 9
  correo: string;
  clave: string;
  nombres: string;
  apellidos: string;
  departamento: string;
  localidad: string;
  municipio: string;
  genero: string;
  ruta_imagen_perfil: string;
  numero_documento: string;
  telefono: string;
  fecha_nacimiento: string; // 'YYYY-MM-DD' format
  puntos: number;
};

// Tabla usuarios_bootcamps_notas
export type TableUsuarioBootcampNota = {
  id: string;
  id_usuario: string;
  id_bootcamp: string;
  concepto: string;
  nota: number; // decimal(4,2)
};

// Tabla usuarios_bootcamps_suscripciones
export type TableUsuarioBootcampSuscripcion = {
  id: string;
  id_usuario: string;
  id_bootcamp: string;
};

// Tabla usuarios_foros_entradas
export type TableUsuarioForoEntrada = {
  id: string;
  id_usuario: string;
  id_foro: string;
  descripcion: string;
  fecha_hora: string; // 'YYYY-MM-DDTHH:MM:SS' format
};
