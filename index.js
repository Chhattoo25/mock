const express = require("express");
var cors = require('cors')
const { connection } = require("./config/db");
const { UserModel } = require("./models/UserModel");
const { authentication } = require("./middleware/authentication");
const { AuthRouter } = require("./routes/authRoute");
require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 4000
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("WELCOME");
});

app.use("/auth",AuthRouter )

app.get("/getprofile", authentication, async(req,res)=>{
 const {user_id} = req.body
 const user = await UserModel.findOne({_id:user_id})
const {name,email} = user
 res.send({name,email})
})




app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connected to db successfully");
  } catch (err) {
    console.log(err);
    console.log("err from connected to DB");
  }
  console.log("http://localhost:8080");
});
