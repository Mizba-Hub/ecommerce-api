const Product = require("../models/products");

async function getAllProducts() {
  const products = await Product.find().populate(["brand", "category"]);
  return products;
}

async function getProductById(id) {
  const product = await Product.findById(id);
  return product;
}

async function createProduct(data) {
  const newProduct = await new Product(data);
  const savedData = newProduct.save();
  return savedData;
}

async function updateProduct(id, data) {
  const products = await Product.findByIdAndUpdate(id, data);
  const result = await Product.findById(id);
  return result;
}

async function deleteProduct(id) {
  const result = Product.findByIdAndDelete(id);
  return result;
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
