const Order = require("../models/order");

async function getAllOrders() {
  const orders = await Order.find()
    .populate("customer")
    .populate("orderLine.product");
  return orders;
}

async function getOrderById(id) {
  const order = await Order.findById(id)
    .populate("customer")
    .populate("orderLine.product");
  return order;
}

async function createOrder(data) {
  const newOrder = new Order(data);
  const savedData = await newOrder.save();
  return savedData;
}

async function updateOrder(id, data) {
  await Order.findByIdAndUpdate(id, data);
  const result = await Order.findById(id)
    .populate("customer")
    .populate("orderLine.product");
  return result;
}

async function deleteOrder(id) {
  const result = await Order.findByIdAndDelete(id);
  return result;
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
