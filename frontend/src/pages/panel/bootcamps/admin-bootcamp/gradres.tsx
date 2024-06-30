//import React from 'react';

import { useContext } from "react";

import { pageContext } from "../../../../contexts/panelPageContext";


function Gradres() {
  const { SetPageState } = useContext(pageContext);
    SetPageState("califica");
  return (
    <div>
      <div className="container-xl">
        <h1>NOTAS DE ESTUDIANTES 2</h1>
        <table className="table table-striped table-hover" >
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
                
                <tr>
                    <th scope="row">1</th>
                    <td>Camila Mikan</td>
                    <td>25</td>
                    <td>Bogotá</td>
                    <td>4.8</td>
                    <td>4.0</td>
                    <td>3.5</td>
                    <td>4.1</td>
                    <td>
                      <a href="" className="btn btn-outline-success">Editar</a>
                      <a href="" className="btn btn-outline-danger">Eliminar</a>
                      <a href="" className="btn btn-outline-primary">Calificar</a>
                    </td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Daniel Palma</td>
                    <td>23</td>
                    <td>Bogotá</td>
                    <td>4.8</td>
                    <td>4.8</td>
                    <td>3.5</td>
                    <td>4.3</td>
                    <td>
                      <a href="" className="btn btn-outline-success">Editar</a>
                      <a href="" className="btn btn-outline-danger">Eliminar</a>
                      <a href="" className="btn btn-outline-primary">Calificar</a>
                    </td>
                </tr>
                
            </tbody>
          </table>      
          
      </div>
    </div>
  )
}

export default Gradres
