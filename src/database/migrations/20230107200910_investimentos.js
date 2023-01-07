exports.up = function (knex) {
  return knex.schema.createTable("investimentos", function (table) {
    table.string("id_investimento").primary().notNullable();
    table.string("id_usuario").notNullable();
    table
      .foreign("id_usuario")
      .references("id_usuario")
      .inTable("usuario")
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
  return knex.schema.dropTable("investimentos");
};
