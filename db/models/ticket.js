const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    category: {
      type: {
        categoryId: {
          type: ObjectId,
          ref: "Category",
          required: true,
        },

        categoryName: {
          type: String,
          required: true,
        },
      },
    },

    board: {
      type: {
        boardId: {
          type: ObjectId,
          ref: "Board",
          required: true,
        },

        boardName: {
          type: String,
          required: true,
        },
      },
    },

    createdBy: {
      type: {
        userId: {
          type: ObjectId,
          ref: "User",
          required: true,
        },

        username: {
          type: String,
          required: true,
        },
      },
    },

    assignedTo: {
      type: {
        userId: {
          type: ObjectId,
          ref: "User",
          required: true,
        },

        username: {
          type: String,
          required: true,
        },
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ticket", ticketSchema);
