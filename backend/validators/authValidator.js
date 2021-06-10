const { check } = require("express-validator");

exports.userSignupValidator = [
  check("fullName").not().isEmpty().withMessage("fullName is required"),
  check("phone").isNumeric().withMessage("Phone must be a number"),
  check("email").isEmail().withMessage("Email format must be valid"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 character"),
];

exports.userSigninValidator = [
  check("email").isEmail().withMessage("Email format must be valid"),
  check("password")
    .isLength({ min: 5 })
    .withMessage("Password must be at least 5 char"),
];
