const express = require("express");
const router = express.Router();
const brandController = require("../controllers/brands");

router.get("/", brandController.getAllBrands);
router.get("/:id", brandController.getBrandById);
router.post("/", brandController.createbrand);
router.patch("/:id", brandController.updateBrand);
router.delete("/:id", brandController.deleteBrand);

module.exports = router;
