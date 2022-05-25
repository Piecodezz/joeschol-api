const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema(
  {
    lessonName: {
      type: String,
      required: true,
    },
    questions: {
      type: Number,
      required: true,
    },
    time: {
      type: Number,
      required: true,
    },
    diff: {
      type: String,
      required: true,
    },
    sub: {
      type: String,
      required: true,
    },
    lesub: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lesson", lessonSchema);
