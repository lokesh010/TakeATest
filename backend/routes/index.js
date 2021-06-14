const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const testRoutes = require("./testRoutes");
const questionRoutes = require("./questionRoutes");
const resultsRoutes = require("./resultsRoutes");
const dashboardRoutes = require("./dashboardRoutes");

//routes

router.get("/status", (req, res) => res.json("API Connected!"));

router.use("/dashboard", dashboardRoutes);

router.use("/auth", authRoutes);
router.use("/test", testRoutes);
router.use("/question", questionRoutes);
router.use("/results", resultsRoutes);

module.exports = router;
