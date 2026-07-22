import { Router } from "express";
const router = Router();

import { getPositions } from "../Controllers/PositionsController.js";
import { userVerification } from "../Middlewares/AuthMiddleware.js";

router.get("/", userVerification, getPositions);

export { router };
