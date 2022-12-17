const { JobModel } = require("../Models/JobPosting.Model");

const getJob = async (req, res) => {
  const user = req.params.body;
  try {
    var notes = await JobModel.find({ user });
  } catch (err) {
    console.log(err);
  }
  res.send(notes);
};

const postJob = async (req, res) => {
  const {
    company,
    postedAt,
    city,
    location,
    role,
    level,
    contract,
    position,
    language,
  } = req.body;
  const new_note = new JobModel({
    company,
    postedAt,
    city,
    location,
    role,
    level,
    contract,
    position,
    language,
  });
  await new_note.save();
  res.send({ massage: "notes successfully create", new_note });
};

module.exports = {
  getJob,
  postJob,
};
