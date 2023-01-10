const connection = require("../database/connection");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async create(usuario) {
    const id_usuario = uuidv4();
    usuario.level = 1;
    usuario.exp_atual = 0;
    usuario.id_usuario = id_usuario;
    await connection("usuario").insert(usuario);
    return usuario;
  },
  async getByEmail(email) {
    const result = await connection("usuario").where({ email }).select("*");

    return result;
  },
  async updateByEmail(email, usuario) {
    const result = await connection("usuario").where({ email }).update(usuario);
    return result;
  },
};
