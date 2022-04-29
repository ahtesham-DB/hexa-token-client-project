import mongoose from "mongoose";

//Mongoose Schema Model SignIn
const signIn = mongoose.Schema({

  fullname: String,
  email: {type:String, required: true},
  password: {type:String, required: true},
  lastlogin:  {type: Date, default: new Date()},
  ip: String,
  loginstatus: String,
  token:String
}, { timestamps: true });

// roles:{type: String, require: true},
// id email , password , encrytion , last login , ip , status , login status , jwt token email template 

var signInModel = mongoose.model("HexaTokenAuth", signIn);

export default signInModel;
