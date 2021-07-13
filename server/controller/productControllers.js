const Product = require('../models/product');

const getAllProducts = async (req, res) => {

  try {
    const dataProduct = await Product.find({});
    await res.json(dataProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'server Error'});
  }
}

const getProduct = async (req, res) => {
  try {
    const productId = await req.params.id;
    const dataproduct = await Product.findById(productId);
    await res.json(dataproduct);
  } catch (error) {
    console.error(error);
  }
}

const searchProduct = async (req, res) => {
  try {
    const keywords = req.query.keywords;
    const details = await Product.fuzzySearch(keywords);

    res.json(details);
  } catch (error) {
    console.error(error)
  }
}

module.exports = {
  getAllProducts,
  getProduct,
  searchProduct
}