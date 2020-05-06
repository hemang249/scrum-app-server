const express = require("express");
const router = express.Router();
const { getBoardById } = require("../controllers/board");
const {
  getUserById,
  isLoggedIn,
  isAuthenticated,
} = require("../controllers/auth");
const { createTicket } = require("../controllers/ticket");

router.param("boardId", getBoardById);
router.param("userId", getUserById);

router.post("/:boardId/:userId", isLoggedIn, isAuthenticated, createTicket);

module.exports = router;
