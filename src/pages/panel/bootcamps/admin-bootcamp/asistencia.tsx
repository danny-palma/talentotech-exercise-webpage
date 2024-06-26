import { useContext } from "react";

import { pageContext } from "../../../../contexts/panel-page-indexer";

function Asistencia() {
    const { SetPageState } = useContext(pageContext);
    SetPageState("asistencia");
    return (
        <div>
            <h1>Control de Asistencias</h1>
            <div>
                <div className="container-xl">
                    <table className="table-striped table-hover table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Edad</th>
                                <th scope="col">Ciudad</th>
                                <th scope="col">Clase1</th>
                                <th scope="col">Clase2</th>
                                <th scope="col">Clase3</th>
                                <th scope="col">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Camila Mikan</td>
                                <td>25</td>
                                <td>Bogotá</td>
                                <td>Asistio</td>
                                <td>Asistio</td>
                                <td>No Asistio</td>
                                <td>89%</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Daniel Palma</td>
                                <td>25</td>
                                <td>Bogotá</td>
                                <td>Asistio</td>
                                <td>Asistio</td>
                                <td>No Asistio</td>
                                <td>79%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Asistencia;
