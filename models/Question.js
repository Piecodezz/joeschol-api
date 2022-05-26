const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    options: [
      {
        q1: {
          type: String,
          required: true,
        },
        q2: {
          type: String,
          required: true,
        },
        q3: {
          type: String,
          required: true,
        },
        q4: {
          type: String,
          required: true,
        },
      },
    ],
    lesub: {
      type: String,
      required: true,
    },
    pp: {
      type: String,
    },
    corQ: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", questionSchema);
