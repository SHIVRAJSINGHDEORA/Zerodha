import {model} from "mongoose"
import { HoldingSchema } from "../Schemas/holdingSchema.js"

const Holding = await  model("Holding", HoldingSchema);

export  { Holding };
