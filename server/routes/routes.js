import express from "express";
import { signUp , signIn } from '../controllers/authController.js'
import { blogPost, updateBlogPost, contactUs, fAqUpdate, ticketRaise } from '../controllers/routesController.js'
import { notFound, errorHandler } from "../middleware/errorHandler.js";
import auth from "../middleware/auth.js";

import satelize from 'satelize'

const router = express.Router();

//Default response "/" 
router.get("/", (req, res) => {


// console.log(geo);

//second option ip
 
// Example retrieve IP from request
// var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
 
// then satelize call
 
// satelize.satelize({ip:'49.36.23.146'}, function(err, payload) {
//   // if used with expressjs
//   // res.send(payload);
//   // console.log(payload)
//   // res.json...
// });

    res.send("server running ");
   
  });

  //SignUp router
router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/blogPost",auth, blogPost);
router.patch("/updateblogPost:id", updateBlogPost);
router.post("/contactUs", contactUs);
router.post("/ticketRaise", ticketRaise);

router.post("/fAq:id", fAqUpdate);


router.use(notFound);
router.use(errorHandler);

  export default router