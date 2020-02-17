const mongoose = require("mongoose");
const { Schema } = mongoose;

const questionSchema = new Schema({
  type: String,
  question: String,
  answer: String,
  wrongAnswers: [String],
  season: { type: Number, require: false },
  episode: { type: Number, require: false },
  tags: [String]
});

module.exports = mongoose.model("Question", questionSchema);
