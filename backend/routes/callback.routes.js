const router = require("express").Router();
const { createCallback } = require("../controllers/callback.controller");

router.post("/", createCallback);

module.exports = router;