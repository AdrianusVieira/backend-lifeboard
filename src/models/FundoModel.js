const connection = require("../database/connection");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async create(fundo) {
    const id_fundo = uuidv4();
    fundo.id_fundo = id_fundo;
    await connection("fundos").insert(fundo);
    return fundo;
  },
  async getByUsuario(id_usuario) {
    const result = await connection("fundos").where({ id_usuario }).select("*");

    return result;
  },
  async updateById(id_fundo, fundo) {
    const result = await connection("fundos").where({ id_fundo }).update(fundo);
    return result;
  },
  async deleteById(id_fundo) {
    const result = await connection("fundos").where({ id_fundo }).delete();
    return result;
  },
};
