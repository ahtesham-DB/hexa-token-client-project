import mongoose from "mongoose";

var fAq = new mongoose.Schema({
  question: String,
  answer: String,
});



var fAqModel = mongoose.model("HexaTokenFaQ", fAq);

export default fAqModel;