const productRepository = require("../repositories/products");
const orderRepository = require("../repositories/order");

async function createOrderService({ customer, orderLine }) {
  let totalAmount = 0;
  const orderDetails = [];

  for (const item of orderLine) {
    const product = await productRepository.getProductById(item.product);
    if (!product) {
      throw new Error(`Product not found: ${item.product}`);
    }

    const unitPrice = product.price;
    const totalPrice = unitPrice * item.quantity;
    totalAmount += totalPrice;

    orderDetails.push({
      product: item.product,
      quantity: item.quantity,
      unit_price: unitPrice,
      total_price: totalPrice,
    });
  }

  const newOrder = {
    customer,
    orderLine: orderDetails,
    totalAmount,
  };

  return await orderRepository.createOrder(newOrder);
}

module.exports = { createOrderService };
