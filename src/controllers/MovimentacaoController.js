const { request } = require("express");
const { getByCarteira } = require("../models/MovimentacaoModel");
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
  async getByCarteira(request, response) {
    try {
      const { id_carteira } = request.params;
      const result = await MovimentacaoModel.getByCarteira(id_carteira);
      return response.status(200).json(result);
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar encontrar as Movimentacoes!",
      });
    }
  },
  async getByFundo(request, response) {
    try {
      const { id_fundo } = request.params;
      const result = await MovimentacaoModel.getByFundo(id_fundo);
      return response.status(200).json(result);
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar encontrar as Movimentacoes!",
      });
    }
  },
  async getByInvestimento(request, response) {
    try {
      const { id_investimento } = request.params;
      const result = await MovimentacaoModel.getByInvestimento(id_investimento);
      return response.status(200).json(result);
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar encontrar as Movimentacoes!",
      });
    }
  },
};
