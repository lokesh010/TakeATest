const express = require("express");
const router = express.Router();
const { read } = require("../controllers/userController");
const {
  authMiddleware,
} = require("../controllers/authControllers");

router.get("/profile", authMiddleware, read);

module.exports = router;
