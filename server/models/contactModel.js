import mongoose from "mongoose";

//Mongoose Schema Model Blog
const contactUs = mongoose.Schema({
  "email":String,
  "phone":String,
  "fullname":String,
  "message":String,
  "date":String,
  },{ timestamps: true });

var contactUsModel = mongoose.model("HexaTokenContactUs", contactUs);

export default contactUsModel;