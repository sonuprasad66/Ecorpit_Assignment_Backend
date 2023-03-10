const express = require("express");
const userRouter = express.Router();
const {
  userSignup,
  userLogin,
  userProfile,
  checkUser,
} = require("../Controllers/User.controller");
const { authentication } = require("../Middlewares/authenticate");
const { razorPay } = require("../Controllers/Razorpay.controller");

userRouter.post("/checkuser", checkUser);
userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);
userRouter.post("/razorpay", razorPay);
userRouter.get("/profile", authentication, userProfile);

module.exports = {
  userRouter,
};
