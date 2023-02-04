const { request } = require("express");
const {
  getByEmail,
  updateByEmail,
  deleteByEmail,
} = require("../models/UsuarioModel");
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
  async updateByEmail(request, response) {
    try {
      const { email } = request.params;
      const usuario = request.body;
      const result = await UsuarioModel.updateByEmail(email, usuario);

      return response.status(200).json(result);
    } catch (error) {
      console.warn("User update failed" + error);

      return response.status(500).json({
        notification: "Falha Interna ao tentar atualizar o usuario!",
      });
    }
  },
  async deleteByEmail(request, response) {
    try {
      const { email } = request.params;
      const result = await UsuarioModel.deleteByEmail(email);

      return response.status(200).json(result);
    } catch (error) {
      console.log("User delete failed" + error);

      return response.status(500).json({
        notification: "Erro interno ao deletar o usuario!",
      });
    }
  },
};
