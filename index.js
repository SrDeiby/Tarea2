import express from "express";
import data from "./data/data.json" with { type: "json" };

const app = express();

const HOST = "localhost";
const PORT = 4321;

import { getAll } from "./routes/mundiales/getAll.js";
import { Campeon } from "./routes/mundiales/getCampeon.js";
import { random } from "./routes/mundiales/random.js";
import { search } from "./routes/mundiales/search.js";
import { getBySlug } from "./routes/mundiales/getBySlug.js";

app.get("/", (req, res) => res.send("Alo API 1.0"));


app.get("/mundiales", getAll);
app.get("/random", random);
app.get("/campeon/:pais", Campeon);
app.get("/search/:text", search);
app.get("/mundial/:slug", getBySlug);





app.listen(PORT, HOST, () => {
  console.log(`Server at http://${HOST}:${PORT}/`);
});