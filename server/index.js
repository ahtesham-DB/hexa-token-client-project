import express, { Router } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import "dotenv/config";


import router from "./routes/routes.js";

const PORT = process.env.PORT || 3005;

const app = express()
app.use(bodyParser.urlencoded({limit: "16mb", extended: true}))
app.use(bodyParser.json({limit: "16mb", extended: true}))
app.use(cors())

app.use("/", router);
export const conn = mongoose
  .connect(process.env.MONGODBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });