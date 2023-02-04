const { request } = require("express");
const TarefaModel = require("../models/TarefaModel");

module.exports = {
  async create(request, response) {
    try {
      const tarefa = request.body;
      const result = await TarefaModel.create(tarefa);
      return response.status(200).json({ tarefa: result });
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar criar Tarefa!",
      });
    }
  },
  async getByUsuario(request, response) {
    try {
      const { id } = request.params;
      const result = await  TarefaModel.getByUsuario(id);
      return response.status(200).json(result);
    } catch (error) {
      console.warn(error);
      return response.status(500).json({
        notification: "Erro Interno ao tentar encontrar as Tarefas!",
      });
    }
  },
  async updateById(request, response) {
    try {
      const { id } = request.params;
      const tarefa = request.body;
      const result = await TarefaModel.updateById(id, tarefa);

      return response.status(200).json(result);
    } catch (error) {
      console.warn("Tarefa update failed" + error);

      return response.status(500).json({
        notification: "Falha Interna ao tentar atualizar a tarefa!",
      });
    }
  },
  async deleteById(request, response) {
    try {
      const { id } = request.params;
      const result = await TarefaModel.deleteById(id);

      return response.status(200).json(result);
    } catch (error) {
      console.log("User delete failed" + error);

      return response.status(500).json({
        notification: "Erro interno ao deletar a tarefa!",
      });
    }
  },
};
