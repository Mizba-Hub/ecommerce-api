const mongoose = require("mongoose");

const orderLineSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      require: true,
    },
    quantity: {
      require: true,
      type: Number,
    },
    unit_price: {
      require: true,
      type: Number,
    },
    total_price: {
      require: true,
      type: Number,
    },
  },
  { _id: false }
);

const orderSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customer",
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  totalAmount: {
    require: true,
    type: Number,
  },
  orderLine: [orderLineSchema],
});

module.exports = mongoose.model("Order", orderSchema);
