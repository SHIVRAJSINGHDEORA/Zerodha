import { Router } from "express";
const router = Router();
import {
  Signup,
  Login,
  SendOtp,
  VerifyOtp,
  ResetPass,
  verifyResetController,
  Logout,
  userVerification,
} from "../Controllers/AuthController.js";
import { resetPassVerification } from "../Middlewares/AuthMiddleware.js";

router
  .post("/", userVerification)
  .post("/signup", Signup)
  .post("/login", Login)
  .post("/send-otp", SendOtp)
  .post("/verify-otp", VerifyOtp)
  .post("/reset", verifyResetController)
  .post("/reset-pass", resetPassVerification, ResetPass)
  .post("/logout", Logout);

export { router };
