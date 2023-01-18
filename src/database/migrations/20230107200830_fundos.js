
exports.up = function (knex) {
  return knex.schema.createTable("fundos", function (table) {
    table.string("id_fundo").primary().notNullable();
    table.string("id_usuario").notNullable();
    table
      .foreign("id_usuario")
      .references("id_usuario")
      .inTable("usuarios")
      .onDelete("cascade");
    table.string("nome").notNullable();
    table.float("patrimonio").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("fundos");
};