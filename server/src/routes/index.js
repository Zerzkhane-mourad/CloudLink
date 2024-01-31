const { Router } = require("express");
const infoRouter = require("./info");
const todosRouter = require("./todos");

const router = Router();

router.use("/api", infoRouter);
router.use("/api", todosRouter);

module.exports = router;
