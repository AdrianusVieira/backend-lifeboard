const { request } = require("express");
const CarteiraModel = require("../models/CarteiraModel");
const FundoModel = require("../models/FundoModel");

module.exports = {
  async create(request, response) {
    try {
      const fundo = request.body;
      const result = await FundoModel.create(fundo);
      return response.status(200).json({ fundo: result });
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar criar Fundo!",
      });
    }
  },
  async getByUsuario(request, response) {
    try {
      const { id } = request.params;
      const result = await FundoModel.getByUsuario(id);
      return response.status(200).json(result);
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar encontrar os Fundos!",
      });
    }
  },
  async updateById(request, response) {
    try {
      const { id } = request.params;
      const fundo = request.body;
      const result = await FundoModel.updateById(id, fundo);

      return response.status(200).json(result);
    } catch (error) {
      console.warn("fundo update failed" + error);

      return response.status(500).json({
        notification: "Falha Interna ao tentar atualizar o fundo!",
      });
    }
  },
  async deleteById(request, response) {
    try {
      const { id } = request.params;
      const result = await FundoModel.deleteById(id);

      return response.status(200).json(result);
    } catch (error) {
      console.log("User delete failed" + error);

      return response.status(500).json({
        notification: "Erro interno ao deletar o fundo!",
      });
    }
  },
};