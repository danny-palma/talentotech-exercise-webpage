//import React from 'react'

import { useContext } from "react";

import { useParams } from "react-router-dom";

import { pageContext } from "../../../../contexts/panelPageContext";
import { useUserContext } from "../../../../contexts/userContext";

function AdminBootcampAsistencia() {
  const { SetPageState } = useContext(pageContext);
  const { id } = useParams();
  SetPageState("asistencia");
  const { currentUserInformation } = useUserContext();
  if (!currentUserInformation) return;
  const currentBootcamp = currentUserInformation.bootcamps.find(
    (bootcamp) => bootcamp.id == id,
  );
  
  
  if (!currentBootcamp) return;
  // currentBootcamp.sessions.map
  return (
    <div>
      <h1>Creación de asistencias { currentBootcamp.titulo }</h1>
      <div>
        <div className="container-xl">
          <a href="" className="btn btn-outline-primary mt-4">
            Crear nuevo<i className="bx bx-plus-medical"></i>
          </a>

          <table className="table-striped table-hover table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Id usuario</th>
                <th scope="col">Id sesión</th>
                <th scope="col">Estado asistencia</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>1</td>
                <td>1.1</td>
                <td>Asisitió</td>
              
                <a href="" className="btn btn-outline-success">
                  Editar
                </a>
                <a href="" className="btn btn-outline-danger">
                  Eliminar
                </a>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminBootcampAsistencia;

//<a href="" className="btn btn-outline-success">
//  Editar
//</a>
//<a href="" className="btn btn-outline-danger">
//  Eliminar
//</a>