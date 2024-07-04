import {
  TableBootcamp,
  TableBootcampForo,
  TableBootcampLinkExterno,
  TableBootcampSesion,
  TableNotaConcepto,
  TableSesionUsuarioAsistencia,
  TableUsuario,
  TableUsuarioBootcampNota,
  permissions_levels,
} from "./database-types";

export type IAPIUserInformation = Omit<TableUsuario, "clave"> & {
  bootcamps: (TableBootcamp & {
    sessions: (Omit<TableBootcampSesion, "id_bootcamp"> & {
      userAsistence: {
        id: string | null;
        estado_asistencia: permissions_levels | null;
      } & Omit<TableSesionUsuarioAsistencia, "id_usuario" | "id_sesion">;
    })[];
    forums: Omit<TableBootcampForo, "id_bootcamp">[];
    externalLinks: {
      id: string;
      nombreGrupo: string;
      links: Omit<TableBootcampLinkExterno, "id_bootcamp" | "id_grupo">[];
    }[];
    userNotes: (Omit<
      TableUsuarioBootcampNota,
      "id_usuario" | "id_bootcamp" | "id_concepto"
    > & { concepto: Omit<TableNotaConcepto, "id_bootcamp"> })[];
  })[];
};

export type IAPIBootcampUsersNotes = (Omit<TableUsuario, "clave"> & {
  notas_usuario: (Omit<
    TableUsuarioBootcampNota,
    "id_usuario" | "id_bootcamp" | "id_concepto"
  > & {
    concepto: Omit<TableNotaConcepto, "id_bootcamp">;
  })[];
})[];