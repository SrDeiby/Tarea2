import data from "../../data/data.json" with { type: "json" };

export function search(req, res) {
  const text = req.params.text.toLowerCase();
  const campos = ["nombre", "sede", "campeon", "subcampeon", "goleador"];
  const resultados = data.filter(m =>
    campos.some(campo => m[campo].toLowerCase().includes(text))
  );
  if (!resultados.length) return res.status(404).json({ error: "Sin resultados" });
  res.json(resultados);
}