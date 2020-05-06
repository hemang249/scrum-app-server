const express = require("express");
const router = express.Router();
const {
  createCategory,
  deleteCategory,
  getCategoryById,
  getAllCategories,
  updateCategory,
} = require("../controllers/category");
const { getBoardById } = require("../controllers/board");
const {
  getUserById,
  isLoggedIn,
  isAuthenticated,
} = require("../controllers/auth");

router.param("userId", getUserById);
router.param("boardId", getBoardById);

router.post("/:boardId/:userId", isLoggedIn, isAuthenticated, createCategory);

router.get(
  "/all/:boardId/:userId",
  isLoggedIn,
  isAuthenticated,
  getAllCategories
);

module.exports = router;
