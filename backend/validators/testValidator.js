const { check } = require("express-validator");

exports.createTest = [
  check("name").not().isEmpty().withMessage("Test name is required"),
  check("totalMarks").not().isEmpty().withMessage("total marks required"),
  check("passMarks").not().isEmpty().withMessage("pass marks required"),
];