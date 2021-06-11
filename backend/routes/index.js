const express = require("express");
const router = express.Router();
//define controllers
const { time } = require("../controllers/blogControllers");
// routes
const authRoutes = require("./authRoutes");
const testRoutes = require("./testRoutes");

//routes
router.get("/status", time);
router.use("/auth", authRoutes);
router.use("/test", testRoutes);

module.exports = router;
