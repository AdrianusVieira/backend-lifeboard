const connection = require("../database/connection");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async create(investimento) {
    const id_investimento = uuidv4();
    investimento.id_investimento = id_investimento;
    await connection("investimentos").insert(investimento);
    return investimento;
  },
  async getByCategoria(categoria) {
    const result = await connection("investimentos")
      .where({ categoria })
      .select("*");

    return result;
  },
  async getByUsuario(id_usuario) {
    const result = await connection("investimentos")
      .where({ id_usuario })
      .select("*");

    return result;
  },
  async updateById(id_investimento, investimento) {
    const result = await connection("investimentos")
      .where({ id_investimento })
      .update(investimento);
    return result;
  },
  async deleteById(id_investimento) {
    const result = await connection("investimentos")
      .where({ id_investimento })
      .delete();
    return result;
  },
};
