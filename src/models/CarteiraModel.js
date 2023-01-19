const connection = require("../database/connection");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async create(carteira) {
    const id_carteira = uuidv4();
    carteira.id_carteira = id_carteira;
    await connection("carteiras").insert(carteira);
    return carteira;
  },
  async getByUsuario(id_usuario) {
    const result = await connection("carteiras")
      .where({ id_usuario })
      .select("*");

    return result;
  },
  async updateById(id_carteira, carteira) {
    const result = await connection("carteiras")
      .where({ id_carteira })
      .update(carteira);
    return result;
  },
  async deleteById(id_carteira) {
    const result = await connection("carteiras").where({ id_carteira }).delete();
    return result;
  },
};
