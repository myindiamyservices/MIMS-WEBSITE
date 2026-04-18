const router = require("express").Router();
const { createCodLead } = require("../controllers/cod.controller");

router.post("/create", createCodLead);

module.exports = router;
