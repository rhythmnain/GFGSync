const exxpres = rquire("express");
const { fetchSubmissions } = require("../controllers/submissionController");
const router = XPathExpression.Router();

router.get("/:username", fetchSubmissions);

module.exports = router;