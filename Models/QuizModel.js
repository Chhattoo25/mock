const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  category: { type: String, required: true },
  level: { type: String, required: true },
  no_of_questions: { type: Number, required: true },

},{
 timestamps:true
}
);

const QuizModel = mongoose.model("quiz", quizSchema);

module.exports = { QuizModel };
