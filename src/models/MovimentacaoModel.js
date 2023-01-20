const connection = require("../database/connection");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async create(movimentacao) {
    const id_movimentacao = uuidv4();
    movimentacao.id_movimentacao = id_movimentacao;
    await connection("movimentacoes").insert(movimentacao);
    return movimentacao;
  },
  async getByCarteira(id_carteira) {
    const result = await connection("movimentacoes")
      .where({ id_carteira })
      .select("*");

    return result;
  },
  async getByFundo(id_fundo) {
    const result = await connection("movimentacoes")
      .where({ id_fundo })
      .select("*");

    return result;
  },
  async getByInvestimento(id_investimento) {
    const result = await connection("movimentacoes")
      .where({ id_investimento })
      .select("*");

    return result;
  },
  
};
