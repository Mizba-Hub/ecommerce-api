const brandRepository = require("../repositories/brands");

async function getAllBrands(req, res) {
  const brands = await brandRepository.getAllBrands();
  res.status(200).json(brands);
}

async function getBrandById(req, res) {
  const id = req.params.id;
  const brand = await brandRepository.getBrandById(id);
  res.status(200).json(brand);
}

async function createbrand(req, res) {
  try {
    const savedData = await brandRepository.createBrand({
      name: req.body.name,
    });
    res.status(200).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateBrand(req, res) {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await brandRepository.updateBrand(id, data);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteBrand(req, res) {
  const id = req.params.id;
  try {
    const result = await brandRepository.deleteBrand(id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getAllBrands,
  getBrandById,
  createbrand,
  updateBrand,
  deleteBrand,
};
