const { QuizModel } = require("../Models/QuizModel");


const getData = async (req, res) => {

  try {
    var notes = await QuizModel.find();
    res.send({ data: notes, msg: "get data" });
  } catch (err) {
    console.log(err);
  }

};


module.exports = {
  getData,
}
