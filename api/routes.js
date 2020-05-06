const express = require("express");
const router = express.Router();
const authRoutes = require("./auth");
const boardRoutes = require("./board");
const categoryRoutes = require("./category");
const ticketRoutes = require("./ticket");

router.use("/", authRoutes);
router.use("/board", boardRoutes);
router.use("/category", categoryRoutes);
router.use("/ticket", ticketRoutes);

module.exports = router;
