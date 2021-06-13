const express = require("express");
const router = express.Router();
const { create, getMyResult, 
  // getAll, getByUser
 } = require("../controllers/resultsControllers");
const {
  authMiddleware,
  adminMiddleware
} = require("../controllers/authControllers");

// get by admin
// router.get("/", adminMiddleware, getAll);
// router.get("/:userId", adminMiddleware, getByUser);

// create by students after taking test
router.post("/", authMiddleware, create);
router.get("/my-results", authMiddleware, getMyResult);

module.exports = router;
