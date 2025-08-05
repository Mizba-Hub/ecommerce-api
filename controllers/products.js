const productRepository = require("../repositories/products");

async function getAllProducts(req, res) {
  const products = await productRepository.getAllProducts();
  res.status(200).json(products);
}

async function getProductById(req, res) {
  const id = req.params.id;
  const product = await productRepository.getProductById(id);
  res.status(200).json(product);
}

async function createProduct(req, res) {
  try {
    const savedData = await productRepository.createProduct({
      title: req.body.title,
      brand: req.body.brand,
      category: req.body.category,
      price: req.body.price,
    });
    res.status(200).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateProduct(req, res) {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await productRepository.updateProduct(id, data);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteProduct(req, res) {
  const id = req.params.id;
  try {
    const result = await productRepository.deleteProduct(id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
