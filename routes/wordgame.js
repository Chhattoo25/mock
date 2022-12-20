const { Router } = require("express");
const { getUser, postUser, randomWord, getScore, scoreUpdate } = require("../controllers/wordgame");

const PostingRouter = Router();

PostingRouter.get("/getuser", getUser);
PostingRouter.post("/postuser", postUser);

PostingRouter.get("/getrandom",randomWord)
PostingRouter.get("/getscore",getScore)
PostingRouter.get("/scoreupdate",scoreUpdate)
PostingRouter.post("/getrandom/:id",randomWord)
module.exports = {
  PostingRouter,
};
