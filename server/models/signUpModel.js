import mongoose from "mongoose";

//Mongoose Schema Model SignUp
const signup = mongoose.Schema({

  fullname: String,
  email: {type:String, required: true},
  password: {type:String, required: true},
  lastlogin:  String,
  ip: String,
  loginstatus: String,
  token:String
});

// roles:{type: String, require: true},
// id email , password , encrytion , last login , ip , status , login status , jwt token email template 

var signUpModel = mongoose.model("HexaToken", signup);

export default signUpModel;
