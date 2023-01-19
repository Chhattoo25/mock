
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../Models/UserModel");

require("dotenv").config();
const signup = async (req, res) => {
  const { email, password } = req.body;
  const isUser = await UserModel.findOne({ email });
  if (isUser) {
    res.send({ msg: "User already exist,logging in" });
  } else {
    bcrypt.hash(password, 5, async function (err, hash) {
      if (err) {
        res.send({ msg: "Something went wrong, please try again later" });
      }
      const new_user = new UserModel({
        email,
        password: hash,
      });

      try {
        await new_user.save();
        res.send({ msg: "signup successfully", password: hash });
      } catch (err) {
        res.send({ msg: "something went wrong please try again" });
      }
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  const hashed_password = user.password;
  const user_id = user._id;

  bcrypt.compare(password, hashed_password, function (err, result) {
    if (err) {
      res.send({ mag: "something went wrong,try again later" });
    }
    const token = jwt.sign({ user_id: user_id }, process.env.SECRET_KEY);
    if (result) {
      res.send({ msg: "Login successfully", token });
    } else {
      res.send({ msg: "Login Failed" });
    }
  });
};

module.exports = {
  signup,
  login,
};
