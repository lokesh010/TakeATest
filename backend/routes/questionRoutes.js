const express = require("express");
const router = express.Router();

//import validator
const { runValidation } = require("../validators");
const {
  createQuestion,
} = require("../validators/questionValidator");

const { createWithAnswers } = require("../controllers/questionControllers");
const {
  adminMiddleware
} = require("../controllers/authControllers");

router.post("/", createQuestion, runValidation, adminMiddleware, createWithAnswers);

module.exports = router;
