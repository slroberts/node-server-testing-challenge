exports.seed = function (knex) {
  // Inserts seed entries
  return knex('stores').insert([
    { name: 'Supreme' },
    { name: 'Kith' },
    { name: 'Feature' },
  ]);
};
