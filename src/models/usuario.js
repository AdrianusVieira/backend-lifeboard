const connection = require("../database/connection");

modeule.exports = {
  async create(usuario) {
    const result = await connection("usuario").insert(usuario);
    return result;
  },
  async getByEmail({ email }) {
    const result = await connection("usuario")
      .where({ email })
      .select("usuario_id");

    return result;
  },
};
