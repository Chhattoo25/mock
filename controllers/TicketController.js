const { TicketModel } = require("../Models/TicketModel");



const getData = async (req, res) => {

  try {
    var notes = await TicketModel.find();
    res.send({ data: notes, msg: "get data" });
  } catch (err) {
    console.log(err);
  }

};

const postData = async(req,res)=>{
  try{
const {category,title,message} = req.body 
 const new_ticket = new TicketModel({
 category,title,message
 })
  
 await new_ticket.save()

 res.send({message:"ticket created",new_ticket})
  }
  catch(err){
    console.log(err)
  }
}


module.exports = {
  getData,postData
}
