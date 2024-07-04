//import React from 'react';

import { useContext, useEffect, useState } from "react";

import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

import { IAPIBootcampUsersNotes } from "../../../../../../types/api-json-types";
import { pageContext } from "../../../../contexts/panelPageContext";
import { useUserContext } from "../../../../contexts/userContext";
import { getUsersBootcamp } from "../../../../services/api/api";

function AdminBootcampUsuarios() {
  const { SetPageState } = useContext(pageContext);
  const [BootcampUsuarios, setBootcampUsuarios] =
    useState<IAPIBootcampUsersNotes>();
  const { id } = useParams();
  SetPageState("usuarios");
  const { currentUserInformation } = useUserContext();
  useEffect(() => {
    if (!id) return;
    getUsersBootcamp(id).then((users) => setBootcampUsuarios(users));
  }, [id]);
  if (!currentUserInformation) return;
  const currentBootcamp = currentUserInformation.bootcamps.find(
    (bootcamp) => bootcamp.id == id,
  );
  if (!currentBootcamp) return;
  return (
    <div>
      <div className="container-xl">
        <h1>NOTAS DE ESTUDIANTES 2</h1>
        <table className="table-striped-columns table-hover table">
          <thead>
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Notas</th>
              <th scope="col">Promedio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {BootcampUsuarios?.map((usuario, index) => {
              return (
                <tr key={index}>
                  <td>
                    {usuario.nombres} {usuario.apellidos}
                  </td>
                  <td>
                    {new Date().getFullYear() -
                      new Date(
                        Date.parse(usuario.fecha_nacimiento),
                      ).getFullYear()}
                  </td>
                  <td>{usuario.departamento}</td>
                  <td>
                    {usuario.notas_usuario.map((nota) => (
                      <p>
                        {`• ${nota.nota} | Concepto: ${nota.concepto.concepto}`}
                        <br />
                      </p>
                    ))}
                  </td>
                  <td>
                    {(() => {
                      const numNotas = usuario.notas_usuario.length;
                      if (!numNotas) return "Sin notas";
                      let sumNotas = 0;
                      usuario.notas_usuario.forEach(
                        (nota) =>
                          (sumNotas += Number.parseFloat(nota.nota.toString())),
                      );
                      return sumNotas / numNotas;
                    })()}
                  </td>
                  <td className="flex flex-row items-center h-full">
                    <Button variant="contained" sx={{ width: "50%", marginRight: "1rem" }}>
                      Eliminar
                    </Button>
                    <Button variant="contained" sx={{ width: "50%" }}>
                      Calificar
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>
      </div>
    </div>
  );
}

export default AdminBootcampUsuarios;
