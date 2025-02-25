const express = require("express");
const { syncSubmissions } = require("../controllers/syncController");   
const router = express.Router();

router.post("/", syncSubmissions);

module.exports = router;