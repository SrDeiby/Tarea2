import * as mundial from "../../data/mundiales.js";

export const getCampeon = (req, res) => {
  const result = mundial.getByCampeon(req.params.pais);
  if (!result.length) return res.status(404).json({ error: "Ningún Mundial encontrado para ese país" });
  res.json(result.map(item => item.slug));
};