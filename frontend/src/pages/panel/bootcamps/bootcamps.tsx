import { useContext } from "react";

import { Link } from "react-router-dom";

import { pageContext } from "../../../contexts/panelPageContext";

function Bootcamps() {
    const { SetPageState } = useContext(pageContext);
    SetPageState("bootcamps");
    return (
        <h1>
            <Link to="/panel/bootcamps/prueba">Ir al ejercicio</Link>
        </h1>
    );
}

export default Bootcamps;
