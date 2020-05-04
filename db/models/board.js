const mongoose = require("mongoose");
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

    categories: {
      type: [mongoose.model("Category").schema],
      required: false,
      default: [],
    },

    tickets: {
      type: [mongoose.model("Ticket").schema],
      required: false,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Board", boardSchema);
