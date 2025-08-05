const orderRepository = require("../repositories/order");
const orderService = require("../services/orderService");

async function getAllOrders(req, res) {
  const orders = await orderRepository.getAllOrders();
  res.status(200).json(orders);
}

async function getOrderById(req, res) {
  const id = req.params.id;
  const order = await orderRepository.getOrderById(id);
  res.status(200).json(order);
}

async function createOrder(req, res) {
  try {
    const savedOrder = await orderService.createOrderService(req.body);
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function updateOrder(req, res) {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await orderRepository.updateOrder(id, data);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteOrder(req, res) {
  const id = req.params.id;
  try {
    const result = await orderRepository.deleteOrder(id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
