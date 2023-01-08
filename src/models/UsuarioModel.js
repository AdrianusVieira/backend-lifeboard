const connection = require("../database/connection");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async create(usuario) {
    const id_usuario = uuidv4();
    usuario.id_usuario = id_usuario;
    await connection("usuario").insert(usuario);
    return usuario;
  },
  async getByEmail({ email }) {
    const result = await connection("usuario")
      .where({ email })
      .select("usuario_id");

    return result;
  },
};
