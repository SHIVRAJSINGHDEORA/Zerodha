import { model } from "mongoose";
import { userSchema } from "../Schemas/UserSchema.js";

const User = await model("User", userSchema);

export { User };
