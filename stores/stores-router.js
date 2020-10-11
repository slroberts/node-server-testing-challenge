const router = require('express').Router();
const Stores = require('../stores/stores-model.js');

router.get('/', async (req, res) => {
  try {
    const stores = await Stores.getAll();
    res.status(200).json(stores);
  } catch (err) {
    res.status(500).json({ message: 'db error getting stores', err });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const storeById = await Stores.findById(id);
    res.status(200).json(storeById);
  } catch (err) {
    res.status(500).json({ message: 'failed to get store with id' });
  }
});

router.post('/', async (req, res) => {
  try {
    const store = await Stores.insert(req.body);
    res.status(201).json(store);
  } catch (err) {
    res.status(500).json({ message: 'failed to post store' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const changes = req.body;

    await Stores.update(id, changes);
    const updatedStore = await Stores.getAll();
    res.status(200).json({
      updatedStore,
      message: 'store updated',
    });
  } catch (err) {
    res.status(500).json({ message: 'failed to update store' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const storeDeleted = await Stores.remove(id);
    res.status(200).json({ storeDeleted, message: 'deleted' });
  } catch (err) {
    res.status(500).json({ message: 'failed to delete store' });
  }
});

module.exports = router;
