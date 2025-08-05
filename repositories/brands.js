const Brand = require("../models/brands");

async function getAllBrands() {
  const brands = await Brand.find();
  return brands;
}

async function getBrandById(id) {
  const brand = await Brand.findById(id);
  return brand;
}

async function createBrand(data) {
  const newBrand = await new Brand(data);
  const savedData = newBrand.save();
  return savedData;
}

async function updateBrand(id, data) {
  const brands = await Brand.findByIdAndUpdate(id, data);
  const result = await Brand.findById(id);
  return result;
}

async function deleteBrand(id) {
  const result = Brand.findByIdAndDelete(id);
  return result;
}

module.exports = {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand,
};
