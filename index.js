const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { connection } = require("./config/db");
const {AuthRouter} = require("./routes/authRoute");
const { TicketRouter } = require("./routes/ticketRoute");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/auth",AuthRouter )
app.use("/ticket",TicketRouter )


app.get("/",(req,res)=>{
 res.send("welcome")
})
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to db successfully");
  } catch (err) {
    console.log(err);
    console.log("err connected to db");
  }
  console.log("server started at  http://localhost:8080");
});
