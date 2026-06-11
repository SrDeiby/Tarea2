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

app.get("/", (req, res) => res.send("Alo API 1.0"));
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

