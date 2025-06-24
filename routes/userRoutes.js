const express = require("express");
const { getMe, getAdminData } = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const { authorize } = require("../middleware/roleMiddleware");
const router = express.Router();

router.get("/me", protect, getMe);
router.get("/admin", protect, authorize("admin"), getAdminData);

module.exports = router;
