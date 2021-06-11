const express = require("express");
const router = express.Router();
//define controllers
const { time } = require("../controllers/blogControllers");
// routes
const authRoutes = require("./authRoutes");
const testRoutes = require("./testRoutes");
const questionRoutes = require("./questionRoutes");

//routes
router.get("/status", time);
router.use("/auth", authRoutes);
router.use("/test", testRoutes);
router.use("/question", questionRoutes);

module.exports = router;
