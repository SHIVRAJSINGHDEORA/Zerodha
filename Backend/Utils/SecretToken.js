import jsonwebToken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export let createSecretToken = (id) => {
  return jsonwebToken.sign({ _id : id }, process.env.SECRET_TOKEN, {
    algorithm: "HS256",
    expiresIn: 3 * 24 * 60 * 60,
  });
};

export let createResetToken = (id) => {
  return jsonwebToken.sign({ _id : id }, process.env.RESET_TOKEN, {
    algorithm: "HS256",
    expiresIn: 600,
  });
};
