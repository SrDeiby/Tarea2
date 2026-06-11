import data from "../../data/data.json" with { type: "json" };

export function getBySlug(req, res) {
  const slug = req.params.slug.toLowerCase();
  const mundial = data.find(m => m.slug.toLowerCase() === slug);
  if (!mundial) return res.status(404).json({ error: "Mundial no encontrado" });
  res.json(mundial);
}