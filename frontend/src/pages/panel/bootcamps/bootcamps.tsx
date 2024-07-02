import { useContext } from "react";

import { Link } from "react-router-dom";

import { pageContext } from "../../../contexts/panelPageContext";
import { useUserContext } from "../../../contexts/userContext";

function Bootcamps() {
  const { currentUserInformation } = useUserContext();
  const { SetPageState } = useContext(pageContext);
  SetPageState("bootcamps");
  return (
    <div className="">
      {currentUserInformation?.bootcamps.map((bootcamp) => {
        return (
            <h1>
              <Link to={`/panel/bootcamps/${bootcamp.id}`}>
                Ir al bootcamp {bootcamp.titulo}
            </Link>
            <br />
            </h1>
        );
      })}
    </div>
  );
}

export default Bootcamps;
