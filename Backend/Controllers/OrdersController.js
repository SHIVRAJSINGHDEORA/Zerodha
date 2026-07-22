import { Order } from "../Models/orders.js";

export const getOrders = async (req, res) => {
  try {
    let orderData = await Order.find({});
    res.json(orderData);
  } catch (error) {
    res.status(500).json({ message: "Error fetching orders", error });
  }
};

export const createOrder = async (req, res) => {
  try {
    let newOrder = {
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    };
    await Order.insertOne(newOrder);
    res.send(newOrder);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating order", error });
  }
};
