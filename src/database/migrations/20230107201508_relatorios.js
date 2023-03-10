exports.up = function (knex) {
  return knex.schema.createTable("relatorios", function (table) {
    table.string("id_relatorio").primary().notNullable();
    table.string("id_carteira");
    table
      .foreign("id_carteira")
      .references("id_carteira")
      .inTable("carteiras")
      .onDelete("cascade");
    table.string("id_fundo");
    table
      .foreign("id_fundo")
      .references("id_fundo")
      .inTable("fundos")
      .onDelete("cascade");
    table.string("id_investimento");
    table
      .foreign("id_investimento")
      .references("id_investimento")
      .inTable("investimentos")
      .onDelete("cascade");
    table.string("data_hora").notNullable();
    table.float("valor").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("relatorios");
};
