const router = require("express").Router();

router.use("/user", require("./user"));
router.use("/url", require("./url"));

module.exports = router;