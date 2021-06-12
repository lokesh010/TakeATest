const express = require("express");
const router = express.Router();
const { create, read, destroy } = require("../controllers/testControllers");
const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/authControllers");

router.post("/", adminMiddleware, create);
router.get("/", read);
router.delete("/:id", adminMiddleware, destroy);

module.exports = router;
