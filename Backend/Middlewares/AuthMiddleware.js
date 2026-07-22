import { User } from "../Models/users.js";
import dotenv from "dotenv";
dotenv.config();
import jsonwebToken from "jsonwebtoken";

export let userVerification = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.json({ status: false });
  }

  try {
    const data = jsonwebToken.verify(token, process.env.SECRET_TOKEN);

    const user = await User.findById(data._id);

    if (!user) {
      return res.status(401).json({ status: false });
    }

    next();
  } catch (err) {
    return res.status(401).json({ status: false });
  }
};

export let resetPassVerification = async (req, res, next) => {
  const token = req.cookies.reset;

  if (!token) {
    return res.json({ status: false });
  }

  try {
    const data = jsonwebToken.verify(token, process.env.RESET_TOKEN);

    const user = await User.findById(data._id);

    if (!user) {
      return res.status(401).json({ message: "UNAUTHERIZED!!", status: false });
    }

    next();
  } catch (err) {
    if (err.name == "TokenExpiredError") {
      return res
        .status(401)
        .json({
          message: "Session expired. Please verify again !!",
          status: false,
        });
    }
    return res.status(401).json({ message: "UNAUTHERIZED!!", status: false });
  }
};
