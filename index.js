import express from "express";
import data from "./data/data.json" with { type: "json" };

const app = express();

const HOST = "localhost";
const PORT = 4321;

app.get("/", (req, res) => res.send("Alo API 1.0"));


app.get("/mundiales", (req, res) => {
  res.json(data);
});


app.get("/mundial/:slug", (req, res) => {
  const mundial = data.find(m => m.slug === req.params.slug);
  if (!mundial) return res.status(404).json({ error: "Mundial no encontrado" });
  res.json(mundial);
});


app.get("/campeon/:pais", (req, res) => {
  const pais = req.params.pais.toLowerCase();
  const slugs = data
    .filter(m => m.campeon.toLowerCase() === pais)
    .map(m => m.slug);
  if (!slugs.length) return res.status(404).json({ error: "Ningún Mundial encontrado para ese país" });
  res.json(slugs);
});


app.get("/random", (req, res) => {
  const mundial = data[Math.floor(Math.random() * data.length)];
  res.json(mundial);
});


app.get("/search/:text", (req, res) => {
  const text = req.params.text.toLowerCase();
  const campos = ["nombre", "sede", "campeon", "subcampeon", "goleador"];
  const resultados = data.filter(m =>
    campos.some(campo => m[campo].toLowerCase().includes(text))
  );
  if (!resultados.length) return res.status(404).json({ error: "Sin resultados" });
  res.json(resultados);
});

app.listen(PORT, HOST, () => {
  console.log(`Server at http://${HOST}:${PORT}/`);
});