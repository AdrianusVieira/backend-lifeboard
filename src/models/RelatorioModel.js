const connection = require("../database/connection");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async create(relatorio) {
    const id_relatorio = uuidv4();
    relatorio.id_relatorio = id_relatorio;
    await connection("relatorios").insert(relatorio);
    return relatorio;
  },
  async index() {
    const result = await connection("relatorios").select("*");

    return result;
  },
};
