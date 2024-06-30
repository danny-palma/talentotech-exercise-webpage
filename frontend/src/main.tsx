import React from "react";

import ReactDOM from "react-dom";
import "./index.css";
import { RouterProvider } from "react-router-dom";


import App from "./App";
import { SocketProvider } from './conexionBack/SocketContext.jsx'; //se importa la libreria
import { ThemeContextProvider } from "./contexts/change-theme";
import router from "./";

ReactDOM.render(
    
    
    <React.StrictMode>
        <ThemeContextProvider>
            <SocketProvider>
                <RouterProvider router={router} />
                <App />
            </SocketProvider>        
        </ThemeContextProvider>
    </React.StrictMode>,
    document.getElementById("root"),

    
    
);


