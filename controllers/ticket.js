const Ticket = require("../db/models/ticket");

module.exports = {
  createTicket: async (req, res) => {
    try {
      const { title, category } = req.body;
      const createdBy = {
        userId: req.profile._id,
        username: req.profile.username,
      };

      const board = {
        boardId: req.board._id,
        boardName: req.board.name,
      };

      const ticket = new Ticket({ title, createdBy, category, board });
      await ticket.save();
      res.status(200).json({ ticket, done: true });
    } catch (err) {
      console.log("createTicket" + err);
      res.status(400).json({
        error: "Unable to create a new ticket. Try again later",
        done: false,
      });
    }
  },

  getTicketById: async (req, res, next, id) => {
    // Continue from here.
  },
};
