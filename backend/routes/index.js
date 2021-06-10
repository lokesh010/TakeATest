const express = require("express");
const router = express.Router();
//define controllers
const { time } = require("../controllers/blogControllers");
// routes
const authRoutes = require("./authRoutes");
const blogRoutes = require("./blog");
const userRouters = require("./userRoutes");

//routes
router.get("/status", time);
router.use("/auth", authRoutes);

module.exports = router;
