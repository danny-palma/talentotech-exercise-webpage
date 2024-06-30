import { useContext } from "react";

import { pageContext } from "../../../contexts/panelPageContext";

function PanelMain() {
    const { SetPageState } = useContext(pageContext);
    SetPageState("main");
    return  <h1> menú</h1>
}

export default PanelMain;
