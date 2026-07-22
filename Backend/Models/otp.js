import { model } from "mongoose";
import { otpSchema } from "../Schemas/Otp.js";

const Otp = await model("Otp", otpSchema);

export { Otp };