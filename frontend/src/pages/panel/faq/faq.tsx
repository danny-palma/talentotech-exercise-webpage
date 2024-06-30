import { useContext } from "react";

import { pageContext } from "../../../contexts/panelPageContext";

function Faq() {
    const { SetPageState } = useContext(pageContext);
    SetPageState("faq");
    return <h1>Faq</h1>;
}

export default Faq;
