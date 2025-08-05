const customerRepository = require("../repositories/customers");

async function getAllCustomers(req, res) {
  const customers = await customerRepository.getAllCustomers();
  res.status(200).json(customers);
}

async function getCustomerById(req, res) {
  const id = req.params.id;
  const customer = await customerRepository.getCustomerById(id);
  res.status(200).json(customer);
}

async function createCustomer(req, res) {
  try {
    const savedData = await customerRepository.createCustomer({
      name: req.body.name,
      place: req.body.place,
      address: req.body.address,
    });
    res.status(200).json(savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateCustomer(req, res) {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await customerRepository.updateCustomer(id, data);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteCustomer(req, res) {
  const id = req.params.id;
  try {
    const result = await customerRepository.deleteCustomer(id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
