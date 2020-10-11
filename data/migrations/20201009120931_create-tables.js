exports.up = function (knex) {
  return knex.schema.createTable('stores', (tbl) => {
    tbl.increments();
    tbl.string('name', 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('stores');
};
