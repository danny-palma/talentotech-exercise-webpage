import { useContext } from "react";

import { pageContext } from "../../../contexts/panelPageContext";

function UserManual() {
  const { SetPageState } = useContext(pageContext);
  SetPageState("user-manual");
  return <h1>User Manual</h1>;
}

export default UserManual;
