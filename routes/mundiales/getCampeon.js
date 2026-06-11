import data from "../../data/data.json" with { type: "json" };

export function Campeon(req, res) {
  const pais = req.params.pais.toLowerCase();
  const slugs = data
    .filter(m => m.campeon.toLowerCase() === pais)
    .map(m => m.slug);
  if (!slugs.length) return res.status(404).json({ error: "Ningún Mundial encontrado para ese país" });
  res.json(slugs);
}