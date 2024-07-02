import { useContext } from "react";

import { useParams } from "react-router-dom";

import { pageContext } from "../../../../contexts/panelPageContext";
import { useUserContext } from "../../../../contexts/userContext";

/**
 *  Asociar a bootcamp, eliminar y actualizar, notas y asociaciones al bootcamp
 *  NO EDITA NINGUNA INFORMACION BASICA DEL USUARIO (COOREO, NOMBRES, CONTRASEÑAS ... ETC)
 *  EDITAR INFORMACION RELACIONADA AL BOOTCAMP (SESIONES, VINCULOS EXTERNOS, FOROS, MENTORIAS)
 */
function AdminBootcampSesiones() {
  const { SetPageState } = useContext(pageContext);
  const { id } = useParams();
  SetPageState("asistencia");
  const { currentUserInformation } = useUserContext();
  if (!currentUserInformation) return;
  const currentBootcamp = currentUserInformation.bootcamps.find(
    (bootcamp) => bootcamp.id == id,
  );
  if (!currentBootcamp) return;
  return <div>Admin Bootcamp</div>;
}

export default AdminBootcampSesiones;
