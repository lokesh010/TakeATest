const express = require("express");
const router = express.Router();
const { create, read, destroy, questionsByTest } = require("../controllers/testControllers");
const {
  requireSignin,
  authMiddleware,
  adminMiddleware,
} = require("../controllers/authControllers");

router.post("/", adminMiddleware, create);
router.get("/", read);
router.delete("/:id", adminMiddleware, destroy);
// relations
router.get("/:id/questions", questionsByTest);

module.exports = router;
