import { useContext } from "react";

import { pageContext } from "../../../contexts/panelPageContext";

function Marketplace() {
    const { SetPageState } = useContext(pageContext);
    SetPageState("marketplace");
    return <h1>Marketplace</h1>;
}

export default Marketplace;
