const connection = require("../database/connection");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async create(fundo) {
    const id_fundo = uuidv4();
    fundo.id_fundo = id_fundo;
    await connection("fundos").insert(fundo);
    return fundo;
  },
};
