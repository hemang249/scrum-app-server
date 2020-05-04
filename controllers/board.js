const Board = require("../db/models/board");

module.exports = {
  createBoard: async (req, res) => {
    try {
      const { name } = req.body;
      const createdBy = {
        userId: req.profile._id,
        username: req.profile.username,
      };

      const board = new Board({ name, createBoard });
      await board.save();
      res.status(200).json({ board, done: true });
    } catch (err) {
      console.log("createBoard " + err);
      res
        .status(400)
        .json({ error: "Unable to create the board", done: false });
    }
  },

  getBoardById: async (req, res, next, id) => {
    try {
      const board = await Board.findOne({ _id: id });
      req.board = board;
      next();
    } catch (err) {
      res.status(404).json({ error: "No such board exists" });
    }
  },

  getSingleBoard: async (req, res) => {
    res.status(200).json({ board: req.board });
  },

  getAllBoards: async (req, res) => {
    try {
      const boards = await Board.find({});
      res.status(200).json({ boards });
    } catch (err) {
      res.status(404).json({ error: "No boards found" });
    }
  },

  deleteBoard: async (req, res) => {
    try {
      await req.board.remove();
      res.status(200).json({ done: true });
    } catch (err) {
      console.log("delteBoard" + err);
      res
        .status(400)
        .json({ error: "Unable to delete the board", done: false });
    }
  },
};
