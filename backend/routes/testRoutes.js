const express = require("express");
const router = express.Router();
const { create, read, destroy } = require("../controllers/testControllers");
const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/authControllers");

router.post("/", create);
router.get("/", adminMiddleware, read);
router.delete("/:id", destroy);

module.exports = router;
