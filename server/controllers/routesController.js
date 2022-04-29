import "dotenv/config";
import validator from "email-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import express from "express";
import mongoose from "mongoose";
import blogModel from "../models/blogModel.js";
import contactUsModel from "../models/contactModel.js";
import fAqModel from "../models/f_a_q_Model.js";
import  nodemailer  from 'nodemailer'
import { emailtempContactus } from "../utills/emailtempContactus.js";
import ticketModel from "../models/ticketRaiseModel.js";
import { emailtempTicket } from "../utills/emailtempTicket.js";

//Blog Route
//Comments Route
export const blogPost = async (req, res) => {
    const {
        id,
        date,
        time,
        day,
        title,
        blogtext,
        seotext,
        customurl,
        images,
        blogstatus,
    } = req.body;

    //   console.log(email);
    //fgfgfg
    // let currentTime = new Date()

    //time Data 
    var myDate = new Date();

    let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let monthsList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Oct', 'Nov', 'Dec'];


    let dateT = myDate.getDate();
    let monthT = monthsList[myDate.getMonth()];
    let yearT = myDate.getFullYear();
    let dayT = daysList[myDate.getDay()];

    let todayT = `${dateT} ${monthT} ${yearT}, ${dayT}`;

    let amOrPm;
    let twelveHours = function () {
        if (myDate.getHours() > 12) {
            amOrPm = 'PM';
            let twentyFourHourTime = myDate.getHours();
            let conversion = twentyFourHourTime - 12;
            return `${conversion}`

        } else {
            amOrPm = 'AM';
            return `${myDate.getHours()}`
        }
    };
    let hours = twelveHours();
    let minutes = myDate.getMinutes();

    let currentTimeT = `${hours}:${minutes} ${amOrPm}`;

    console.log(todayT + ' ' + currentTimeT);

    //for blog time calculation
    const date1 = new Date(2021, 1, 1)
    const year1 = date1.getFullYear()
    const month = ('0' + (date1.getMonth() + 1)).substr(-2)
    const day1 = ('0' + date1.getDate()).substr(-2)
    const dateStr = [year1, month, day1].join('')
    console.log(dateStr)

    ///
    let today = new Date();
    let currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const blogPostData = new blogModel({
        id,
        date: new Date(),
        time: currentTime,
        day: `${dayT} ${currentDate}`,
        title,
        blogtext,
        seotext,
        customurl,
        images,
        blogstatus,
    });

    try {


        if (!title || !blogtext || !customurl || !blogtext || !seotext || !images)
            return res
                .status(404)
                .json({ message: "All Feild are required Title and ContentText, Custom Url , SEO Text , images" });

        //   if (fullname.length <= 3 || fullname.length >= 18)
        //     return res
        //       .status(404)
        //       .json({ message: "Name Should be more than 5 char" });

        await blogPostData.save();

        res.status(201).json(blogPostData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const updateBlogPost = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    const {
        title,
        blogtext,
        seotext,
        customurl,
        images,
        blogstatus,
    } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(`No blog post with id: ${id}`);

    let today = new Date();
    let currentDate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var myDate = new Date();

    let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let dayT = daysList[myDate.getDay()];

    const updatedBlogPostData = {
        date: new Date(),
        time: currentTime,
        day: `${dayT} ${currentDate}`,
        title,
        blogtext,
        seotext,
        customurl,
        images,
        blogstatus,
    };

    // { creator, title, message, tags, selectedFile, _id: id };
    await blogModel.findByIdAndUpdate(id, updatedBlogPostData, {
        new: true,
    });

    const Updated = await blogModel.find({ _id:id });

    res.json(Updated);
};

export const contactUs = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    const {
        email,
        phone,
        fullname,
        message
    } = req.body;


    const updatedcontactUsData = new contactUsModel( {
        email,
        phone,
        fullname,
        message,
        date: new Date()
    });
    try {


        if (!email || !fullname || !message)
            return res
                .status(404)
                .json({ message: "Feild are required email and fullname, message" });

        //   if (fullname.length <= 3 || fullname.length >= 18)
        //     return res
        //       .status(404)
        //       .json({ message: "Name Should be more than 5 char" });

        //Sending Email to Admin contact us details 
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
          //Url e-mail replay ticket
          let ticketReply = "https://google.com"
          let info = await transporter.sendMail({
            from: `Hexa Admin panel Contact us Query Recevied  <${"xyz@gmail.com"}>`, // sender address
            to: "ahteshDb@gmail.com", // list of receivers
            subject: "Hexa Admin panel Contact us Query Recevied ", // Subject line
            text: "Contact us Query Recevied", // plain text body
            html: emailtempContactus({email,fullname,phone,message, ticketReply}), // html body
          }).then(() => {
            console.log("E-mail Send")
            // return res.json({ success: true });
          })

        await updatedcontactUsData.save();

        res.status(201).json(updatedcontactUsData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

export const fAqUpdate = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    const {
        question,
        answer
    } = req.body;


    const fAqData = new fAqModel( {
        question,
        answer
    });
    try {


        if (!answer || !question )
            return res
                .status(404)
                .json({ message: "Feild are required question and answer" });

        //   if (fullname.length <= 3 || fullname.length >= 18)
        //     return res
        //       .status(404)
        //       .json({ message: "Name Should be more than 5 char" });

        const data = await fAqModel.findOne({ fAqData });
        await fAqModel.replaceOne({ data }, { question, answer });



        res.status(201).json(fAqData);
    } catch (error) {
        res.status(409).json({ message: error.message ,ErrorUpdating: "failed to Add/Update"});
    }
};

export const ticketRaise = async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    const {
        fullname,
        email,
        phone,
        title,
        category,
        description,
        files,
        status,
        user,
        message_body,
        message_status
    } = req.body;


    const ticketRaiseData = new ticketModel( {
        email,
        phone,
        fullname,
        messages:  {user:"admin", message_body, message_status: false},
        date: new Date()
    });
    try {
   

        if (!email || !fullname )
            return res
                .status(404)
                .json({ message: "Feild are required email and fullname, message" });

        //   if (fullname.length <= 3 || fullname.length >= 18)
        //     return res
        //       .status(404)
        //       .json({ message: "Name Should be more than 5 char" });

        //Sending Email to Admin contact us details 
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
          //Url e-mail replay ticket
          let ticketReply = "https://google.com"
          let info = await transporter.sendMail({
            from: `Hexa Admin panel Contact us Query Recevied  <${"xyz@gmail.com"}>`, // sender address
            to: "ahteshDb@gmail.com", // list of receivers
            subject: "Hexa Admin panel Contact us Query Recevied ", // Subject line
            text: "Contact us Query Recevied", // plain text body
            html: emailtempTicket({email,fullname,phone,message : title, ticketReply,category, description, date : ticketRaiseData.date}), // html body
          }).then(() => {
            console.log("E-mail Send")
            // return res.json({ success: true });
          })

        await ticketRaiseData.save();

        res.status(201).json(ticketRaiseData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};

const ticketRaiseUpdate = async  (req, res) => {

    try{

        // const { email, fullname, phone, id, title, description}

        const data = {
        
        } = req.body



        


    }catch(error){
        console.log(error)
    }


}


