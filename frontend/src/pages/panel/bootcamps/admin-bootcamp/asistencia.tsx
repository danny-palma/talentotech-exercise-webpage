//import React from 'react'

import { useContext } from "react";

import { pageContext } from "../../../../contexts/panel-page-indexer";

function Asistencia() {
  const { SetPageState } = useContext(pageContext);
  SetPageState("asistencia");
  return (
    <div>
      <h1>Creacion de sesiones</h1>
      <div>
      
      <div className="container-xl">
        <a href="" className="btn btn-outline-primary mt-4">Crear nuevo<i className='bx bx-plus-medical'></i></a>
        
      
        <table className="table table-striped table-hover" >
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nombre</th>
                <th scope="col">Edad</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Fecha</th>
                <th scope="col">Tema</th>
                <th scope="col">Acciones</th>
            </tr>
            </thead>
            <tbody>
                
                <tr>
                    <th scope="row">1</th>
                    <td>Camila Mikan</td>
                    <td>25</td>
                    <td>Bogotá</td>
                    <td>16/06/2024</td>
                    <td>Javascrip</td>
                    <a href="" className="btn btn-outline-success">Editar</a>
                    <a href="" className="btn btn-outline-danger">Eliminar</a>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Daniel Palma</td>
                    <td>25</td>
                    <td>Bogotá</td>
                    <td>16/06/2024</td>
                    <td>Javascrip</td>
                    <a href="" className="btn btn-outline-success">Editar</a>
                    <a href="" className="btn btn-outline-danger">Eliminar</a>
                    
                </tr>
                
            </tbody>
          </table>      
          
      </div>
    </div>

    </div>
  )
}

export default Asistencia;
