const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const testRoutes = require("./testRoutes");
const questionRoutes = require("./questionRoutes");
const resultsRoutes = require("./resultsRoutes");

//routes
router.get("/status", (req,res)=> res.json("API Connected!"));
router.use("/auth", authRoutes);
router.use("/test", testRoutes);
router.use("/question", questionRoutes);
router.use("/results", resultsRoutes);

module.exports = router;
