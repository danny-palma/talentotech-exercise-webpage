import React, { useContext } from "react";
import { pageContext } from "../../../contexts/panel-page-indexer";

function Jobs() {
  const { SetPageState } = useContext(pageContext);
  SetPageState("jobs");
  return <h1>Jobs</h1>;
}

export default Jobs;
