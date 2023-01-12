const { request } = require("express");
const CarteiraModel = require("../models/CarteiraModel");

module.exports = {
  async create(request, response) {
    try {
      const carteira = request.body;
      const result = await CarteiraModel.create(carteira);
      return response.status(200).json({ carteira: result });
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar criar Carteira!",
      });
    }
  },
  async getByUsuario(request, response) {
    try {
      const { id } = request.params;
      const result = await CarteiraModel.getByUsuario(id);
      return response.status(200).json(result);
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar encontrar as Carteiras!",
      });
    }
  },
};