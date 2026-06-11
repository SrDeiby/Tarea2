import data from "../../data/data.json" with { type: "json" };

export function random(req, res) {
  const mundial = data[Math.floor(Math.random() * data.length)];
  res.json(mundial);
}