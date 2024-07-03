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
  SetPageState("sesiones");
  const { currentUserInformation } = useUserContext();
  if (!currentUserInformation) return;
  const currentBootcamp = currentUserInformation.bootcamps.find(
    (bootcamp) => bootcamp.id == id,
  );
  if (!currentBootcamp) return;
  return (
    <div>
      <div className="container-xl">
        <h1>Administración de Sesiones { currentBootcamp.titulo }</h1>
        <a href="" className="btn btn-outline-primary mt-4">
            Crear nuevo<i className="bx bx-plus-medical"></i>
          </a>

        <table className="table-striped table-hover table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Id Bootcamp</th>
              <th scope="col">Titulo</th>
              <th scope="col">Descripción</th>
              <th scope="col">Fecha/Hora</th>
              <th scope="col">Link externo</th>
              <th scope="col">Estado sesión</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>1.1</td>
              <td>Bootcamp número 1</td>
              <td>Componente técnico</td>
              <td>16/05/2024</td>
              <td>www.prueba.com</td>
              <td>No asistió</td>
              
              <td>
                <a href="" className="btn btn-outline-success">
                  Editar
                </a>
                <a href="" className="btn btn-outline-danger">
                  Eliminar
                </a>
                
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminBootcampSesiones;