const express = require("express");
const router = express.Router();
const { createWithAnswers, read, destroy } = require("../controllers/questionControllers");
const {
  requireSignin,
  authMiddleware,
  adminMiddleware
} = require("../controllers/authControllers");

router.post("/", adminMiddleware, createWithAnswers);
router.get("/", read);
router.delete("/:id", destroy);

module.exports = router;
