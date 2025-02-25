const express = require("express");
const router = express.Router();
const { githubLogin, gfgLogin } = require("../controllers/authController");

router.get("/github", githubLogin);
router.get("/gfg", gfgLogin);

module.exports = router;