const express = require("express");
const { loginUser, getUser } = require("../controllers/authController");

const router = express.Router();

router.post("/login", loginUser);
router.get("/me", getUser);

module.exports = router;
