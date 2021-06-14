const express = require("express");
const router = express.Router();

//import validator
const { runValidation } = require("../validators");
const {
  createTest
} = require("../validators/testValidator");

const { create, read, destroy, questionsByTest } = require("../controllers/testControllers");
const {
  adminMiddleware,
} = require("../controllers/authControllers");

router.post("/", createTest, runValidation, adminMiddleware, create);
router.get("/", read);
router.delete("/:id", adminMiddleware, destroy);
// relations
router.get("/:id/questions", questionsByTest);

module.exports = router;
