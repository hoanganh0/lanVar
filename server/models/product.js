const mongoose = require("mongoose");
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  growth: {
    type: Number,
    required: true,
  },
  water: {
    type: Number,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  day: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

productSchema.plugin(mongoose_fuzzy_searching, { fields: ['name', 'type'] });

const Product = mongoose.model("products", productSchema);

module.exports = Product;