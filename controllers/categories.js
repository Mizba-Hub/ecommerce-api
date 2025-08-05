const categoryRepository = require("../repositories/categories");

async function getAllCategory(req, res) {
  const categories = await categoryRepository.getAllCategory();
  res.status(200).json(categories);
}

async function getCategoryById(req, res) {
  const id = req.params.id;
  const category = await categoryRepository.getCategoryById(id);
  res.status(200).json(category);
}

async function createCategory(req, res) {
  try {
    const savedData = await categoryRepository.createCategory({
      name: req.body.name,
    });
    res.status(200).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateCategory(req, res) {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await categoryRepository.updateCategory(id, data);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteCategory(req, res) {
  const id = req.params.id;
  try {
    const result = await categoryRepository.deleteCategory(id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
