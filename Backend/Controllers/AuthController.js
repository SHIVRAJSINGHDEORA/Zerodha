import { User } from "../Models/users.js";
import { Otp } from "../Models/otp.js";
import { createSecretToken, createResetToken } from "../Utils/SecretToken.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import jsonwebToken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

let Signup = async (req, res, next) => {
  try {
    const { email, username, password, createdAt } = req.body;
    if (!email || !password || !username) {
      return res.json({ message: "All feilds are required !!" });
    }

    const existingUser = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (existingUser) {
      if (existingUser.email === email) {
        return res.json({
          message: "Already Existing User !!",
          success: false,
        });
      }

      if (existingUser.username === username) {
        return res.json({ message: "Username already taken", success: false });
      }
    }

    const user = await User.insertOne({ email, username, password, createdAt });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res.status(201).json({
      message: "You ragistered successfully",
      success: true,
      email: user.email,
      username: user.username,
    });

    next();
  } catch (err) {
    console.log(err.message);
  }
};

let Login = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    if ((!email && !username) || !password) {
      return res.json({
        message: "All feilds are required !!",
        success: false,
      });
    }

    const user = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });



    if (!user) {
      return res.json({
        message: "Incorrect password or email !!",
        success: false,
      });
    }

    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.json({
        message: "Incorrect password or email !!",
        success: false,
      });
    }

    const token = createSecretToken(user.id);

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    res
      .status(201)
      .json({ message: "You logged in successfully !!", success: true });
    next();
  } catch (err) {
    console.error(err.message);
  }
};

let Logout = async (req, res, next) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
  });

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

let userVerification = async (req, res) => {
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
    return res.json({ status: true, user: user.username });
  } catch (err) {
    return res.status(401).json({ status: false });
  }
};

let SendOtp = async (req, res, next) => {
  try {
    const { email, username } = req.body;

    if (!email && !username) {
      return res.json({
        message: "email or username required !!",
        success: false,
      });
    }

    const existingUser = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (!existingUser) {
      return res.json({
        message: "Incorrect Email or Username !",
        success: false,
      });
    }

    // delete otp if not expired
    await Otp.deleteOne({ email: existingUser.email });

    const otp = Math.floor(100000 + Math.random() * 900000);
    await Otp.insertOne({
      otp: otp,
      email: existingUser.email,
    }).then(() => {
      console.log("hello otp done !");
    });


    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "thakurabugadh7773@gmail.com",
        pass: process.env.GOOGLE_APP_PASSWORD, 
      },
    });

    try {
      await transporter.verify();
      console.log("Server is ready to take our messages");
    } catch (err) {
      console.error("Verification failed:", err);
    }

    const info = await transporter.sendMail({
      from: '"Kite" <thakurabugadh7773@gmail.com>', 
      to: existingUser.email, 
      subject: "Email Verification!", 
      text: `Your OTP for email verification is ${otp}` , 
      html: `<b>Your OTP for email verify is ${otp}</b>`, 
    });


    return res.json({
      message: "otp sent",
      success: true,
      email: existingUser.email,
    });
  } catch (err) {
    console.log(err);
  }
};

let VerifyOtp = async (req, res, next) => {
  try {
    const { otp, email } = req.body;

    if (!otp) {
      return res.json({ message: "Enter sent OTP !", success: false });
    }

    const isExpired = await Otp.findOne({ otp, email });

    if (!isExpired) {
      return res.json({ message: "Invalid or expired !!", success: false });
    }

    if (isExpired.otp != otp) {
      return res.json({ message: "Invalid or expired !!", success: false });
    }

    const data = await User.findOne({ email: email });

    const token = createResetToken(data.id);

    res.cookie("reset", token, {
      httpOnly: true,
      secure : true,
      sameSite : "none"
    });

    return res.json({ message: "User verified", success: true });
  } catch (err) {
    console.log(err);
  }
};

let verifyResetController = async (req, res, next) => {
  const token = req.cookies.reset;

  if (!token) {
    res.json({ message : "UNAUTHERIZED!!", status: false });
  }

  try {
    const data = jsonwebToken.verify(token, process.env.RESET_TOKEN);
    
    const user = await User.findById(data._id);

    if (!user) {
      return res.status(401).json({message : "Unautherized !!", status: false });
    }

    return res.json({message : "Verified !", status: true });
  } catch (err) {
    if (err.name == "TokenExpiredError") {
      return res
        .status(401)
        .json({
          message: "Session expired. Please verify again !!",
          status: false,
        });
    }
    return res.status(401).json({message: "Unautherized !!", status: false });
  }
};

let ResetPass = async (req, res, next) => {
  try {
    const { email, newPass } = req.body;

    if (!email || !newPass) {
      return res.json({ message: "Enter new Password !", success: false });
    }

    const hashPass = await bcrypt.hash(newPass,12);

    const data = await User.findOneAndUpdate(
      { email: email },
      { password: hashPass },
      { runValidators: true },
    );
    
    if (!data) {
      return res.json({ message: "UNAUTHERIZED ACCESS!", success: false });
    }

    res.json({ message: "New Password Reset !", success: true });
  } catch (err) {
    console.log(err.message);
  }
};

export {
  Signup,
  Login,
  SendOtp,
  VerifyOtp,
  ResetPass,
  verifyResetController,
  Logout,
  userVerification,
};
