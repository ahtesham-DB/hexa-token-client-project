import express from "express";
import { signUp } from '../controllers/authController.js'

const router = express.Router();

router.get("/", (req, res) => {
    res.send("server running ");
   
  });

router.post("/signUp", signUp);

  export default router