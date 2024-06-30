import React, { createContext, useContext, useEffect, useState } from 'react';

import io from 'socket.io-client'; // Importa el cliente de Socket.io para establecer la conexión

const SocketContext = createContext(); // Crea un contexto para almacenar la instancia del socket

export const useSocket = () => {
  return useContext(SocketContext); // Hook personalizado para acceder al contexto del socket
};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null); // Estado local para almacenar la conexión del socket

  useEffect(() => {
    const newSocket = io('http://localhost:5174'); // Crea una nueva instancia del socket y se conecta al servidor
    setSocket(newSocket); // Guarda la instancia del socket en el estado

    return () => {
      newSocket.close(); // Cierra la conexión del socket cuando el componente se desmonta
    };
  }, []); // El efecto se ejecuta solo una vez al montar el componente

  return (
    <SocketContext.Provider value={socket}> {/* Proveedor del contexto que proporciona el socket a los componentes hijos */}
      {children} {/* Renderiza los componentes hijos envueltos en el contexto del socket */}
    </SocketContext.Provider>
  );
};