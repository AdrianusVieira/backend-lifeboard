/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("tarefas", function (table) {
    table.string("id_tarefa").primary().notNullable();
    table.string("id_usuario").notNullable();
    table
      .foreign("id_usuario")
      .references("id_usuario")
      .inTable("usuario")
      .onDelete("cascade");
    table.string("descricao").notNullable();
    table.date("data").notNullable();
    table.integer("urgencia").notNullable();
    table.json("recorrencia").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tarefas");
};
