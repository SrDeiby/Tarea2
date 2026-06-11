import * as mundial from "../../data/mundiales.js";

export const getBySlug = (req, res) => {
  const result = mundial.getBySlug(req.params.slug);
  if (!result) return res.status(404).json({ error: "Mundial no encontrado" });
  res.json(result);
};