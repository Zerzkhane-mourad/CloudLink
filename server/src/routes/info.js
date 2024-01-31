const { Router } = require("express");
const { getServerInfo } = require("../services/info.service");

const router = Router();

router.get("/info", getServerInfo);

module.exports = router;
