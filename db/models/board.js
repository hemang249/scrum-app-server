const mongoose = require("mongoose");
require("./category");
require("./ticket");
const { ObjectId } = mongoose.Schema;

const boardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    createdBy: {
      type: {
        userId: {
          type: ObjectId,
        },

        username: {
          type: String,
          required: true,
        },
      },
    },

    todoTickets: {
      type: [mongoose.model("Ticket").schema],
      required: false,
      default: [],
    },

    doingTickets: {
      type: [mongoose.model("Ticket").schema],
      required: false,
      default: [],
    },

    doneTickets: {
      type: [mongoose.model("Ticket").schema],
      required: false,
      default: [],
    },

    iceboxTickets: {
      type: [mongoose.model("Ticket").schema],
      required: false,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Board", boardSchema);
