import { Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: [true, "Alredy existing user !!"]
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
    unique : [true,"This username is not available !!!"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});


export {userSchema};
