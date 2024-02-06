const Item = require('../models/itemModel');

module.exports = {
  async getAllItems() {
    return await Item.find();
  },

  async createItem(itemData) {
    return await Item.create(itemData);
  },

  async getItemById(itemId) {
    return await Item.findById(itemId);
  },

  async updateItem(itemId, itemData) {
    return await Item.findByIdAndUpdate(itemId, itemData, { new: true });
  },

  async deleteItem(itemId) {
    return await Item.findByIdAndDelete(itemId);
  },
};
