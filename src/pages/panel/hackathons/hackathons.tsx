import { useContext } from "react";
import { pageContext } from "../../../contexts/panel-page-indexer";

function Hackathons() {
  const { SetPageState } = useContext(pageContext);
  SetPageState("hackatons");
  return <h1>Hackathons</h1>;
}

export default Hackathons;
