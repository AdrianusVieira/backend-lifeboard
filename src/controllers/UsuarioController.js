const { request } = require("express");
const { getByEmail } = require("../models/UsuarioModel");
const UsuarioModel = require("../models/UsuarioModel");

module.exports = {
  async create(request, response) {
    try {
      const usuario = request.body;
      const result = await UsuarioModel.create(usuario);
      return response.status(200).json({ usuario: result });
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar criar Usuario!",
      });
    }
  },

  async getByEmai(request, response) {
    try {
      const { email } = request.params;
      const result = await UsuarioModel.getByEmail(email);
      return response.status(200).json(result);
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar encontrar Usuario!",
      });
    }
  },
};
