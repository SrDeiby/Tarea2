import express from "express";
import { cwd } from "node:process";

import { getAll } from "./routes/mundiales/getAll.js";
import { getCampeon } from "./routes/mundiales/getCampeon.js"; // ← Campeon → getCampeon
import { random } from "./routes/mundiales/random.js";
import { search } from "./routes/mundiales/search.js";
import { getBySlug } from "./routes/mundiales/getBySlug.js";

const app = express();

const HOST = "localhost";
const PORT = 4321;

app.use("/imagenes", express.static(`${cwd()}/imagenes`));

app.get("/", (req, res) => res.json({
  nombre: "Copa Mundial FIFA API",
  version: "1.0",
  rutas: [
    { metodo: "GET", ruta: "/mundiales", descripcion: "Lista todos los mundiales (slugs). Usar ?include=full para datos completos" },
    { metodo: "GET", ruta: "/mundial/:slug", descripcion: "Detalle de un mundial por slug" },
    { metodo: "GET", ruta: "/campeon/:pais", descripcion: "Slugs de ediciones ganadas por un país" },
    { metodo: "GET", ruta: "/random", descripcion: "Un mundial aleatorio" },
    { metodo: "GET", ruta: "/search/:text", descripcion: "Buscar mundiales por texto (mínimo 3 caracteres)" },
    { metodo: "GET", ruta: "/imagenes/:archivo", descripcion: "Imagen de un mundial" }
  ]
}));
app.get("/mundiales", getAll);
app.get("/random", random);
app.get("/campeon/:pais", getCampeon); 
app.get("/search/:text", search);
app.get("/mundial/:slug", getBySlug);

app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});



app.listen(PORT, HOST, () => {
  console.log(`Server at http://${HOST}:${PORT}/`);
});

