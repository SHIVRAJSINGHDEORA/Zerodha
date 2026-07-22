import {model} from "mongoose"
import { PositionSchema } from "../Schemas/positionSchema.js";

const Position = await  model("Position", PositionSchema);

export { Position };