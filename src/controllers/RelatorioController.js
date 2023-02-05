const { request } = require("express");
const RelatorioModel = require("../models/RelatorioModel");
const { index } = require("../models/RelatorioModel");

module.exports = {
  async create(request, response) {
    try {
      const relatorio = request.body;
      const result = await RelatorioModel.create(relatorio);
      return response.status(200).json({ relatorio: result });
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar criar Relatorio!",
      });
    }
  },
  async index(request, response) {
    try {
      const { tipo } = request.params;
      const result = await RelatorioModel.index();
      const res = result.filter((result) => result[`id_${tipo}`] !== null);
      return response.status(200).json(res);
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar encontrar os Relatorios!",
      });
    }
  },
};
