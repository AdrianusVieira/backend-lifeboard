const connection = require("../database/connection");
const { v4: uuidv4 } = require("uuid");

module.exports = {
  async create(tarefa) {
    const id_tarefa = uuidv4();
    tarefa.id_tarefa = id_tarefa;
    await connection("tarefas").insert(tarefa);
    return tarefa;
  },
  async getByUsuario(id_usuario) {
    const result = await connection("tarefas")
      .where({ id_usuario })
      .select("*");

    return result;
  },
  async updateById(id_tarefa, tarefa) {
    const result = await connection("tarefas")
      .where({ id_tarefa })
      .update(tarefa);
    return result;
  },
  async deleteById(id_tarefa) {
    const result = await connection("tarefas")
      .where({ id_tarefa })
      .delete();
    return result;
  },
};
