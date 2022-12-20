const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, required: true },
  score: { type: Number, required: true },

},{
 timestamps:true
}
);

const WordGameModel = mongoose.model("gameuser", userSchema);

module.exports = { WordGameModel };
