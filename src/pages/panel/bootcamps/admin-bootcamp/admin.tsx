import { useContext } from "react";

import { pageContext } from "../../../../contexts/panel-page-indexer";

/**
 *  Asociar a bootcamp, eliminar y actualizar, notas y asociaciones al bootcamp
 *  NO EDITA NINGUNA INFORMACION BASICA DEL USUARIO (COOREO, NOMBRES, CONTRASEÑAS ... ETC)
 *  EDITAR INFORMACION RELACIONADA AL BOOTCAMP (SESIONES, VINCULOS EXTERNOS, FOROS, MENTORIAS)
 */
function AdminBootcamp() {
  const { SetPageState } = useContext(pageContext);
    SetPageState("void");
  return (
    <div>Admin Bootcamp</div>
  )
}

export default AdminBootcamp