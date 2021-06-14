const { check } = require("express-validator");

exports.createQuestion = [
  check("testId").not().isEmpty().withMessage("Select a test for the question"),
  check("questions.*.question").not().isEmpty().withMessage("Question is required"),
  check("questions.*.marks").not().isEmpty().withMessage("quesitons's marks required"),
  check("questions.*.answers.*.answer").not().isEmpty().withMessage("questions's answer is required"),
  check("questions.*.answers.*.correct").not().isEmpty().withMessage("chhose a correct answer"),
];