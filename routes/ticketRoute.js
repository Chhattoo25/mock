const { Router } = require("express");
const { postData, getData } = require("../controllers/TicketController");
const { authentication } = require("../middleware/authentication");


const TicketRouter = Router();

TicketRouter.get("/getdata",authentication, getData);
TicketRouter.post("/postdata",authentication, postData);

module.exports = {
  TicketRouter,
};
