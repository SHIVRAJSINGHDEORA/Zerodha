import { Schema } from "mongoose";

const otpSchema = new Schema({
  otp: {
    type: Number,
    required: true
  },

  email: {
    type: String,
    required : true
  },

  created_at: {
    type: Date,
    default: Date.now,
    expires: 120,
  },
});


export {otpSchema} ;