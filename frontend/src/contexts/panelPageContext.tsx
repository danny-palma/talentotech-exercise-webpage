import { createContext, useEffect, ReactNode } from "react";

interface PageContextProps {
  SetPageState: (pageName: string) => void;
}
const actions: PageContextProps = {
  SetPageState: (pageName: string) => {
    useEffect(() => {
      const btn = document.getElementById("btn-" + pageName);
      const btnList = document.getElementsByClassName("menu-item");
      for (const btnListIndex of btnList) {
        btnListIndex.classList.remove("bg-blue");
        btnListIndex.classList.remove("text-white");
        btnListIndex.classList.add("bg-transparent");
      }
      if (btn) {
        btn.classList.remove("bg-transparent");
        btn.classList.add("bg-blue");
        btn.classList.add("text-white");
      }
    });
  },
};

export const PageContextProvider = ({ children }: { children: ReactNode }) => {
  return (
    <pageContext.Provider value={actions}>{children}</pageContext.Provider>
  );
};

export const pageContext = createContext<PageContextProps>(actions);
