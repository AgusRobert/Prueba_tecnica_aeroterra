const { Router } = require("express");
const poisRoute = require("./pois.js");

const router = Router();

router.use("/pois", poisRoute);

module.exports = router;
