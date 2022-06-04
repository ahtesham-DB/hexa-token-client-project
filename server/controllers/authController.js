import "dotenv/config";
import validator from "email-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import express from "express";
import mongoose from "mongoose";
import signUpModel from "../models/signUpModel.js";
import signInModel from '../models/signInModel.js'
import http from "http";
import geoip from 'geoip-lite'
import  nodemailer  from 'nodemailer'
import { emailHtml } from "../utills/emailtemp.js";

const router = express.Router()


//SignUP Route Controller 
export const signUp = async (req, res) => {
  const { fullname, email, password, profilePhoto } = req.body;
  try {

    const newSignUpModel = new signUpModel({
      fullname: fullname,
      email: email,
      password: password,
      profilePhoto: profilePhoto,
      roles: "admin"
    })

    //Validation
    //Database query
    //Auth middleware
    //Error Handler
    console.log(req)
    // await newSignUpModel.save()

  } catch (error) {
    console.log(error)
    res.send({ message: error });
  }

}


//SignIn Route 
export const signIn = async (req, res) => {
  const { email, password, fullname } = req.body;
  // let ipAddress = req.socket.remoteAddress;
  // console.log(req)

  try {
    const existUser = await signInModel.findOne({ email });

    if (!existUser)
      return res.status(404).json({ message: "user doesnt exist" });
    if (password !== existUser.password)
      return res.status(404).json({ message: "user exist, Wrong password " });

    var ip = "500.36.400.146";
    var geo = geoip.lookup(ip);

    let locationData = `${geo.country} ${geo.city} ip: ${ip}`


    // var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress

    // console.log("ip", ip)
    // console.log("ip", req)
    // const token = jwt.sign({ email: existUser.email }, process.env.Access_tokenSecretKey, {
    //   expiresIn: "1y",
    // });

    const updatedSignInData = {

      email,
      fullname,
      lastlogin: new Date(),
      ip: locationData,
      loginstatus: "active",
      token: existUser.token
    }
    //E-Mail Send to admin about Login info 
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER, // generated ethereal user
        pass: process.env.MAIL_PASSWORD, // generated ethereal password
      },
    });
    // console.log(transporter)
    let info = await transporter.sendMail({
      from: `Hexa Admin panel LogedIn  <${"ahteshDb@gmail.com"}>`, // sender address
      to: "ahteshDb@gmail.com", // list of receivers
      subject: "Hexa Admin panel LogedIn ", // Subject line
      text: "text", // plain text body
      html: emailHtml({ip,locationData}), // html body
    }).then(() => {
      console.log("E-mail Send")


      // return res.json({ success: true });
    })


    await signInModel.findOneAndUpdate(email, updatedSignInData, {
      new: true,
    });
    const existUserUpdated = await signInModel.findOne({ email });

    res.json(existUserUpdated);


    // const correctPassword = await bcrypt.compare(password, existUser.password);

    // if (!correctPassword)
    //   return res.status(404).json({ message: "user wrong password" });

    // if(password !== existUser.password) return res.status(404).json({message: "user wrong password"})

    // const token = jwt.sign({ email: existUser.email }, process.env.Access_tokenSecretKey, {
    //   expiresIn: "3m",
    // });
    // const tokenRefresh = jwt.sign(
    //   { email: existUser.email },
    //   process.env.refresh_tokenSecretKey,
    //   { expiresIn: "2h" }
    // );

    //not sending hold uers object just jwt token
    // res.status(200).json(existUser);

    // const alreadyIssueToken = await tokenValidation.findOne({ email });

    // if (alreadyIssueToken) {
    //   res.send({ auth: "Error : please sign out first or rest password" });
    // } else {
    //   const tokenValid = new tokenValidation({ tokenRefresh, email });
    //   await tokenValid.save();
    //   res.status(200).json({
    //     email: existUser.email,
    //     fullname: existUser.fullname,
    //     Dob: existUser.dob,
    //     token,
    //     tokenRefresh,
    //   });
    // }


  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
