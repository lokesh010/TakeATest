const express = require("express");
const router = express.Router();
const { getAdminDashboard, getStudentDashboard } = require("../controllers/dashboardControllers");
const {
  authMiddleware,
  adminMiddleware
} = require("../controllers/authControllers");

router.get("/admin", adminMiddleware, getAdminDashboard);
router.get("/student", authMiddleware, getStudentDashboard);

module.exports = router;
