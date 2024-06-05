import { useContext } from "react";
import { pageContext } from "../../../contexts/panel-page-indexer";
import { Link } from "react-router-dom";

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
