const { request } = require("express");
const { getByCategoria } = require("../models/InvestimentoModel");
const InvestimentoModel = require("../models/InvestimentoModel");

module.exports = {
  async create(request, response) {
    try {
      const investimento = request.body;
      const result = await InvestimentoModel.create(investimento);
      return response.status(200).json({ investimento: result });
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar criar Investimento!",
      });
    }
  },
  async getByCategoria(request, response) {
    try {
      const { categoria } = request.params;
      const result = await InvestimentoModel.getByCategoria(categoria);
      return response.status(200).json(result);
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar encontrar os Investimentos!",
      });
    }
  },
  async updateById(request, response) {
    try {
      const { id } = request.params;
      const investimento = request.body;
      const result = await InvestimentoModel.updateById(id, investimento);

      return response.status(200).json(result);
    } catch (error) {
      console.wanr("Investimento update failed" + error);

      return response.status(500).json({
        notification: "Falha Interna ao tentar atualizar a investimento!",
      });
    }
  },
  async deleteById(request, response) {
    try {
      const { id } = request.params;
      const result = await InvestimentoModel.deleteById(id);

      return response.status(200).json(result);
    } catch (error) {
      console.log("User delete failed" + error);

      return response.status(500).json({
        notification: "Erro interno ao deletar o Investimento",
      });
    }
  },
};
