const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: {
    require: true,
    type: String,
  },
  brand: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Brand",
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  price: Number,
});

module.exports = mongoose.model("Products", productSchema);
