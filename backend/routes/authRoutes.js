const express = require("express");
const route = express.Router();
const {
  studentSignin,
  adminSignin,
  signup,
  signout,
} = require("../controllers/authControllers");

//import validator
const { runValidation } = require("../validators");
const {
  userSignupValidator,
  userSigninValidator,
} = require("../validators/authValidator");

//pass on controllers
route.post("/signup", userSignupValidator, runValidation, signup);
route.post("/student/signin", userSigninValidator, runValidation, studentSignin);
route.post("/admin/signin", userSigninValidator, runValidation, adminSignin);
route.get("/signout", signout);

module.exports = route;
