// makes changes
exports.up = function(knex) {
  //   create table
  return knex.schema.createTable("veggies", tbl => {
    tbl.increments("id");
    tbl
      .string("name", 225)
      .notNullable()
      .unique();

    tbl.boolean("tasty");
    tbl.timestamp(true, true); // create_at , update_at
  });
};

// undo changes
exports.down = function(knex) {
  //   remove table
  return knex.schema.dropTableIfExists("veggies");
};
