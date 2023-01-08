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
};
