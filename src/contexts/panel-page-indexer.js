import React, { createContext, useEffect } from "react";

export const pageContext = createContext();

export const PageContextProvider = ({ children }) => {
    const SetPageState = (pageName) => {
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
        })
    }
  return (
    <pageContext.Provider value={{SetPageState}}>{children}</pageContext.Provider>
  );
};
