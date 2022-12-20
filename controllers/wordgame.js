const { WordGameModel } = require("../Models/User");

const getUser = async (req, res) => {
  const user = req.params.body;
  try {
    var notes = await WordGameModel.find();
    res.send({ data: notes, msg: "get data" });
  } catch (err) {
    console.log(err);
  }
  res.send(notes);
};

const postUser = async (req, res) => {
  const { name, level, score } = req.body;
  const new_note = new WordGameModel({
    name,
    level,
    score,
  });
  await new_note.save();
  res.send({ massage: "user registered successfully create", new_note });
};

const randomWord = async (req, res) => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  function generateString(length) {
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }
  let num = Math.floor(Math.random() * (10 - 7) + 7);

  let a = generateString(num);

  res.send({ data: a.toLocaleLowerCase(), msg: "Here is your  word" });
};


const getScore = async(req,res) => {
  const {name} = req.params;

  const user = await WordGameModel.findOne({name});
  res.json(user.score);

}


const scoreUpdate = async(req,res) => {
  const {name,score} = req.params;

  const score1 = await WordGameModel.findOne({name})
  

  const user = await WordGameModel.findOneAndUpdate({name:name},{score:Number(score1.score)+Number(score)});

  res.json(user)

}
module.exports = {
  getUser,
  postUser,
  randomWord,
  getScore,
  scoreUpdate
};
