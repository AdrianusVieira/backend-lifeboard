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
};