const express = require("express");
const {
  createUser,
  userLogin,
} = require("../controllers/userController");

const router = express.Router();

router.route("/login").post(userLogin);
router.route("/register").post(createUser);

module.exports = router;