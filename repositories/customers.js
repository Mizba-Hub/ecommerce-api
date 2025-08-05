const Customer = require("../models/customers");

async function getAllCustomers() {
  const customers = await Customer.find();
  return customers;
}

async function getCustomerById(id) {
  const customer = await Customer.findById(id);
  return customer;
}

async function createCustomer(data) {
  const newCustomer = await new Customer(data);
  const savedData = newCustomer.save();
  return savedData;
}

async function updateCustomer(id, data) {
  const customer = await Customer.findByIdAndUpdate(id, data);
  const result = await Customer.findById(id);
  return result;
}

async function deleteCustomer(id) {
  const result = Customer.findByIdAndDelete(id);
  return result;
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
