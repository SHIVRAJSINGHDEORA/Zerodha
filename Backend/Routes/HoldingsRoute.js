import { Router } from "express";
const router = Router();

import {
  getHoldings,
  buyHoldings,
  sellHoldings,
} from "../Controllers/HoldingsController.js";

import { userVerification } from "../Middlewares/AuthMiddleware.js";

router
  .get("/",userVerification, getHoldings)
  .patch("/buy",userVerification, buyHoldings)
  .patch("/sell",userVerification, sellHoldings);

export { router };
