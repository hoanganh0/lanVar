require('dotenv').config();
const productData = require('./data/products');
const connectDB = require('./config/db');
const Product = require('./models/product');

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    await console.log('data import success');
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

importData();