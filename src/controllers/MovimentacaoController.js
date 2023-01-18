const { request } = require("express");
const MovimentacaoModel = require("../models/MovimentacaoModel");

module.exports = {
  async create(request, response) {
    try {
      const movimentacao = request.body;
      const result = await MovimentacaoModel.create(movimentacao);
      return response.status(200).json({ movimentacao: result });
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar criar Movimentação!",
      });
    }
  },
};
