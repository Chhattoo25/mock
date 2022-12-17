const { Router } = require("express");
const { getJob, postJob } = require("../controllers/jobPostingController");

const PostingRouter = Router();

PostingRouter.get("/getjob", getJob);
PostingRouter.post("/postjob", postJob);

module.exports = {
  PostingRouter,
};
