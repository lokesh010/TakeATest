const express = require("express");
const router = express.Router();
const { create, read, destroy } = require("../controllers/testControllers");
const {
  requireSignin,
  authMiddleware,
} = require("../controllers/authControllers");

router.post("/", create);
router.get("/", read);
router.delete("/:id", destroy);

module.exports = router;
