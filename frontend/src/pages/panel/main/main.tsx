import { useContext } from "react";

import bannerProgressBlack from "../../../assets/banner-page-in-progress-black.png";
import bannerProgressWhite from "../../../assets/banner-page-in-progress-white.png";
import { pageContext } from "../../../contexts/panelPageContext";
import { themeContext } from "../../../contexts/themeContext";

function PanelMain() {
  const { SetPageState } = useContext(pageContext);
  const { Theme } = useContext(themeContext);
  SetPageState("main");
  return (
    <div className="flex h-full w-full items-center">
      <img
        src={Theme == "light" ? bannerProgressWhite : bannerProgressBlack}
        alt=""
        className="h-full"
      />
    </div>
  );
}

export default PanelMain;
