import { Router } from "express";
const router = Router();

import { getOrders, createOrder } from "../Controllers/OrdersController.js";
import { userVerification } from "../Middlewares/AuthMiddleware.js";

router
  .get("/", userVerification, getOrders)
  .post("/", userVerification, createOrder);

export { router };
