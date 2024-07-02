import { useContext } from "react";

import { pageContext } from "../../../contexts/panelPageContext";

function Jobs() {
  const { SetPageState } = useContext(pageContext);
  SetPageState("jobs");
  return <h1>Jobs</h1>;
}

export default Jobs;
