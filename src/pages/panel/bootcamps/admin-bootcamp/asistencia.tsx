//import React from 'react'

import { useContext } from "react";

import { pageContext } from "../../../../contexts/panel-page-indexer";

function Asistencia() {
  const { SetPageState } = useContext(pageContext);
  SetPageState("asistencia");
  return (
    <div>
      <h1>Control de Asistencias</h1>
    </div>
  )
}

export default Asistencia;
