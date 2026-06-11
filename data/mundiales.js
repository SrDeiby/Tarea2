import { DatabaseSync } from "node:sqlite";
import { cwd } from "node:process";

const db = new DatabaseSync(`${cwd()}/data/mundiales.db`);

export const getAll = () => {
  const query = db.prepare("SELECT * FROM mundiales");
  return query.all();
};

export const getBySlug = slug => {
  const query = db.prepare("SELECT * FROM mundiales WHERE slug = ?");
  return query.get(slug);
};

export const getByAnio = anio => {
  const query = db.prepare("SELECT * FROM mundiales WHERE anio = ?");
  return query.get(anio);
};

export const getByCampeon = pais => {
  const query = db.prepare("SELECT slug FROM mundiales WHERE LOWER(campeon) = LOWER(?)");
  return query.all(pais);
};

export const getRandom = () => {
  const query = db.prepare("SELECT * FROM mundiales ORDER BY RANDOM() LIMIT 1");
  return query.get();
};

export const search = text => {
  const query = db.prepare(`
    SELECT * FROM mundiales 
    WHERE nombre     LIKE ? 
       OR sede       LIKE ? 
       OR campeon    LIKE ? 
       OR subcampeon LIKE ? 
       OR goleador   LIKE ?
  `);
  const param = `%${text}%`;
  return query.all(param, param, param, param, param);
};