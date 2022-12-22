const { Router } = require("express");
const { getData } = require("../controllers/quizcontroller");

const QuizRouter = Router();

QuizRouter.get("/getdata", getData);

module.exports = {
  QuizRouter,
};
