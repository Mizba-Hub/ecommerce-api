const Category = require("../models/categories");

async function getAllCategory() {
  const categories = await Category.find();
  return categories;
}

async function getCategoryById(id) {
  const category = await Category.findById(id);
  return category;
}

async function createCategory(data) {
  const newCategory = await new Category(data);
  const savedData = newCategory.save();
  return savedData;
}

async function updateCategory(id, data) {
  const Categories = await Category.findByIdAndUpdate(id, data);
  const result = await Category.findById(id);
  return result;
}

async function deleteCategory(id) {
  const result = Category.findByIdAndDelete(id);
  return result;
}

module.exports = {
  getAllCategory,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
