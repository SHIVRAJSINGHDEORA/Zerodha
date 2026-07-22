import {model} from "mongoose"
import { OrderSchema } from "../Schemas/orderSchema.js";

const Order = await  model("Order", OrderSchema);

export { Order };