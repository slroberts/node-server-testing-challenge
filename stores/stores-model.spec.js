const db = require('../data/connection.js');
const Stores = require('./stores-model.js');

describe('stores model', () => {
  describe('insert', () => {
    beforeEach(async () => {
      await db('stores').truncate();
    });

    it('should insert stores into the DB', async () => {
      await Stores.insert({ name: 'Wealthy Hostage' });
      await Stores.insert({ name: '#block3C' });

      const stores = await db('stores');
      expect(stores).toHaveLength(2);
    });

    it('should return what was inserted', async () => {
      let store = await Stores.insert({ name: 'Wealthy Hostage' });
      expect(store.name).toBe('Wealthy Hostage');

      store = await Stores.insert({ name: '#block3C' });
      expect(store.name).toBe('#block3C');
    });
  });

  describe('remove', () => {
    beforeEach(async () => {
      await db('stores').truncate();

      await Stores.insert({ name: 'Wealthy Hostage' });
      await Stores.insert({ name: '#block3C' });
    });

    it('should delete a store from DB', async () => {
      await Stores.remove(1);

      const stores = await Stores.getAll('stores');
      expect(stores).toHaveLength(1);
    });

    it('should delete correct store', async () => {
      await Stores.remove(1);

      const stores = await Stores.getAll('stores');
      expect(stores[0].name).toBe('#block3C');
    });
  });
});
