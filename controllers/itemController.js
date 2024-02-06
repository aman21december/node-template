const itemService = require('../services/itemService');

module.exports = {
  async getAllItems(req, res) {
    try {
      const items = await itemService.getAllItems();
      res.json(items);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createItem(req, res) {
    try {
      const item = await itemService.createItem(req.body);
      res.status(201).json(item);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getItemById(req, res) {
    try {
      const item = await itemService.getItemById(req.params.id);
      if (!item) {
        return res.status(404).json({ error: 'Item not found' });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async updateItem(req, res) {
    try {
      const item = await itemService.updateItem(req.params.id, req.body);
      res.json(item);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async deleteItem(req, res) {
    try {
      await itemService.deleteItem(req.params.id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
