import mongoose from "mongoose";

//Mongoose Schema Model Blog
const blog = mongoose.Schema({
  "id":String,
  "date":String,
  "time":String,
  "day":String,
  "title":String,
  "blogtext":String,
  "seotext":String,
  "customurl":String,
  "images":String,
  "blogstatus":String,
  },{ timestamps: true });

var blogModel = mongoose.model("HexaTokenBlogs", blog);

export default blogModel;