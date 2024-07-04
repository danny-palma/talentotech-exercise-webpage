//import React from 'react';

import { useContext, useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { IAPIBootcampUsers } from "../../../../../../types/api-json-types";
import { pageContext } from "../../../../contexts/panelPageContext";
import { useUserContext } from "../../../../contexts/userContext";
import { getUsersBootcamp } from "../../../../services/api/api";

function AdminBootcampUsuarios() {
  const { SetPageState } = useContext(pageContext);
  const [BootcampUsuarios, setBootcampUsuarios] = useState<IAPIBootcampUsers>();
  const { id } = useParams();
  SetPageState("usuarios");
  const { currentUserInformation } = useUserContext();
  if (!currentUserInformation) return;
  if(!id) return;
  const currentBootcamp = currentUserInformation.bootcamps.find(
    (bootcamp) => bootcamp.id == id,
  );
  if (!currentBootcamp) return;
  if (!BootcampUsuarios)
  getUsersBootcamp(id).then((users)=> setBootcampUsuarios(users));
  return (
    <div>
      <div className="container-xl">
        <h1>NOTAS DE ESTUDIANTES 2</h1>
        <table className="table-striped table-hover table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Nota1</th>
              <th scope="col">Nota2</th>
              <th scope="col">Nota3</th>
              <th scope="col">Promedio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {BootcampUsuarios?.map((usuario, index)=>{
            return (<tr key={index}>
              <th scope="row">1</th>
              <td>{usuario.nombres} {usuario.apellidos}</td>
              <td>{usuario.fecha_nacimiento}</td>
              <td>{usuario.departamento}</td>
              <td>4.8</td>
              <td>4.8</td>
              <td>3.5</td>
              <td>4.3</td>
              <td>
                <a href="" className="btn btn-outline-success">
                  Editar
                </a>
                <a href="" className="btn btn-outline-danger">
                  Eliminar
                </a>
                <a href="" className="btn btn-outline-primary">
                  Calificar
                </a>
              </td>
            </tr>
            )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminBootcampUsuarios;
