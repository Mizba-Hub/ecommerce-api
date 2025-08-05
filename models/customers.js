const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  houseName: {
    require: true,
    type: String,
  },
  street: {
    require: true,
    type: String,
  },
  pincode: {
    require: true,
    type: Number,
  },
});

const customerSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String,
  },
  place: {
    require: true,
    type: String,
  },
  address: addressSchema,
});

module.exports = mongoose.model("Customer", customerSchema);
