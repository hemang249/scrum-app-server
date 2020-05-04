const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
const boardRoutes = require("./board");

router.use("/", authRoutes);
router.use("/board", boardRoutes);
module.exports = router;
