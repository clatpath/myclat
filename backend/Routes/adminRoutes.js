const express = require("express");
const {
  adminLogin,
  createAdmin
} = require("../controllers/adminController");

const router = express.Router();

router.route("/adminlogin").post(adminLogin);
router.route("/adminregister").post(createAdmin);

module.exports = router;