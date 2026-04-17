const router = require("express").Router();
const { createEstimate } = require("../controllers/estimate.controller");

router.post("/create", createEstimate);

module.exports = router;