import { useContext } from "react";

import { pageContext } from "../../../contexts/panel-page-indexer";

function UserManual() {
    const { SetPageState } = useContext(pageContext);
    SetPageState("user-manual");
    return <h1>User Manual</h1>;
}

export default UserManual;
