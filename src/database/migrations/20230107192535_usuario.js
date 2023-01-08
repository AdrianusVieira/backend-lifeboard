/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("usuario", function (table) {
    table.string("id_usuario").primary().notNullable();
    table.string("nome").notNullable();
    table.string("email").notNullable();
    table.date("data_nascimento").notNullable();
    table.string("foto", 10000);
    table.float("patrimonio_total");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("usuario");
};
