const express = require("express");
const router = express.Router();
const {
  createBoard,
  getAllBoards,
  deleteBoard,
  getBoardById,
  updateBoard,
} = require("../controllers/board");
const {
  getUserById,
  isLoggedIn,
  isAuthenticated,
} = require("../controllers/auth");

router.param("userId", getUserById);
router.param("boardId", getBoardById);

router.post("/:userId", isLoggedIn, isAuthenticated, createBoard);
router.get("/all/:userId", isLoggedIn, isAuthenticated, getAllBoards);
router.put("/:boardId/:userId", isLoggedIn, isAuthenticated, updateBoard);

module.exports = router;
