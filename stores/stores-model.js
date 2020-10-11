const db = require('../data/connection.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(store) {
  const [id] = await db('stores').insert(store, 'id');
  return db('stores').where({ id }).first();
}

async function update(id, changes) {
  const itemToUpdated = await db('stores').where({ id }).update(changes);
  return itemToUpdated;
}

async function remove(id) {
  const itemToDeleted = findById(id);
  const stores = await db('stores').where({ id }).del();
  return itemToDeleted;
}

function getAll() {
  return db('stores');
}

async function findById(id) {
  const store = await db('stores').where({ id }).first();
  return store;
}
