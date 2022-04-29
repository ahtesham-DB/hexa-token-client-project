import mongoose from "mongoose";

var message = new mongoose.Schema({
  user: String,
  message_body: String,
  // message_status:{type: Boolean, default: false},
  created_at: { type: Date, default: new Date()},
});

//Mongoose Schema Model Blog
const ticketRaise = mongoose.Schema({
  "fullname": String,
  "email": String,
  "phone": String,
  "title":String,
  "category":String,
  "description":String,
  "files":String,
  "status":String,
  "date":String,
  "lastupdate":String,
  "messages": [message]
  },{ timestamps: true });

var ticketModel = mongoose.model("HexaTokenTicket", ticketRaise);

export default ticketModel;