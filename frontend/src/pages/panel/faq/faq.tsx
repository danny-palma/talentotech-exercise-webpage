import { useContext } from "react";

import bannerProgressBlack from "../../../assets/banner-page-in-progress-black.png"
import bannerProgressWhite from "../../../assets/banner-page-in-progress-white.png"
import { pageContext } from "../../../contexts/panelPageContext";
import { themeContext } from "../../../contexts/themeContext";

function Faq() {
  const { SetPageState } = useContext(pageContext);
  const { Theme } = useContext(themeContext);
  SetPageState("faq");
  return (
    <div className="h-full w-full flex items-center">
      <img src={ Theme == "light"?  bannerProgressWhite : bannerProgressBlack} alt=""  className="h-full"/>
    </div>
  );
}

export default Faq;
