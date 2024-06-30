import { TableBootcamp, TableBootcampForo, TableBootcampLinkExterno, TableBootcampSesion, TableSesionUsuarioAsistencia, TableUsuario, TableUsuarioBootcampNota } from "./database-types";

export type IAPIUserInformation = Omit<TableUsuario, "clave"> & {
  bootcamps: (TableBootcamp & {
    sessions: (Omit<TableBootcampSesion, "id_bootcamp"> & {
      userAsistence: Omit<
        TableSesionUsuarioAsistencia,
        "id_usuario" | "id_sesion"
      >;
    })[];
    forums: Omit<TableBootcampForo, "id_bootcamp">;
    externalLinks: Omit<TableBootcampLinkExterno, "id_bootcamp">[];
    userNotes: Omit<TableUsuarioBootcampNota, "id_usuario" | "id_bootcamp">[];
  })[];
};
