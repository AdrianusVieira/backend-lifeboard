const connection = require("../database/connection");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async create(movimentacao) {
    const id_movimentacao = uuidv4();
    movimentacao.id_movimentacao = id_movimentacao;
    await connection("movimentacoes").insert(movimentacao);
    return movimentacao;
  },
};
