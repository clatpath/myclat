const express = require("express");
const {
  adminLogin,
  createAdmin
} = require("../controllers/adminController");
const { createQuestion, createMockSet, viewMockSet, questionByMockSet, updateQuestion } = require("../controllers/questionController");

const router = express.Router();

router.route("/adminlogin").post(adminLogin);
router.route("/adminregister").post(createAdmin);
router.route("/createquestion").post(createQuestion);
router.route("/createmockset").post(createMockSet);
router.route("/viewmockset").get(viewMockSet);
router.route("/questionset").get(questionByMockSet);
router.route("/updatequestion/:id").put(updateQuestion);


module.exports = router;