import { useContext } from "react";

import { pageContext } from "../../../contexts/panelPageContext";

function Hackathons() {
  const { SetPageState } = useContext(pageContext);
  SetPageState("hackatons");
  return <h1>Hackathons</h1>;
}

export default Hackathons;
