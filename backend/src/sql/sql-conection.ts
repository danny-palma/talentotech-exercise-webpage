import { createPool } from "mysql2/promise";

// Crear el pool de conexiones
const pool = createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  typeCast: true,
});

// Manejar evento de conexión exitosa
pool
  .getConnection()
  .then((connection) => {
    console.log("Conexión a la base de datos establecida correctamente");
    connection.release(); // Liberar la conexión después de comprobarla
  })
  .catch((error) => {
    console.error("Error al conectar con la base de datos:", error);
    process.exit(1); // Salir del proceso Node.js con código de error 1
  });

export default pool;
