import data from "../../data/data.json" with { type: "json" };

export function getAll(req, res) {
  res.json(data);
}