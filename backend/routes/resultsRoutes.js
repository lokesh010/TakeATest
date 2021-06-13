const express = require("express");
const router = express.Router();
const { create, getMyResult, getMyTestAnswers,
  getAll, getUserTestAnswers
 } = require("../controllers/resultsControllers");
const {
  authMiddleware,
  adminMiddleware
} = require("../controllers/authControllers");

// get by admin
router.get("/", adminMiddleware, getAll);
router.get("/user/:UserId/test/:TestId/take/:take_count", adminMiddleware, getUserTestAnswers);
// router.get("/:userId", adminMiddleware, getByUser);

// create by students after taking test
router.post("/", authMiddleware, create);
router.get("/my-results", authMiddleware, getMyResult);
router.get("/test/:TestId/take/:take_count", authMiddleware, getMyTestAnswers);

module.exports = router;
