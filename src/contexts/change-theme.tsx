import { createContext, useEffect, useState, useMemo, ReactNode } from "react";

import { PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { FaMoon, FaSun } from "react-icons/fa";

interface ThemeContextProps {
    setTheme: (theme: PaletteMode) => void;
    toggleTheme: () => void;
    ThemeIcon: JSX.Element;
}

export const themeContext = createContext<ThemeContextProps>({
    setTheme: () => {},
    toggleTheme: () => {},
    ThemeIcon: <FaSun />,
});

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
    const [Theme, setTheme] = useState<PaletteMode>(
        (localStorage.getItem("theme") as PaletteMode) ||
            ("light" as PaletteMode),
    );

    useEffect(() => {
        localStorage.setItem("theme", Theme);
        document.documentElement.setAttribute("data-bs-theme", Theme);
    }, [Theme]);

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: Theme,
                },
            }),
        [Theme],
    );

    function toggleTheme() {
        const newTheme = Theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    }

    const ThemeIcon = Theme === "light" ? <FaSun /> : <FaMoon />;

    return (
        <themeContext.Provider value={{ setTheme, toggleTheme, ThemeIcon }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </themeContext.Provider>
    );
};
