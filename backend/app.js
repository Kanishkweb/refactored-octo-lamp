import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());

import User from "./schema/User.schema.js";

const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;


mongoose.connect(process.env.DB_URL, {
  
  autoIndex: true

})


// User Sign-up...
server.post("/user/signup", async (req, res) => {

  let { username, password } = req.body;

  if(!username || username.length < 3){
    return res.status(403).json({ error: "Username must be at least 3 characters long" });
  }

  if(!passwordRegex.test(password)){
    return res.status(403).json({ error: "Password should be 6-20 characters with 1 uppercase, 1 lowercase and 1 number" })
  }

  bcrypt.hash(password, 10, async (err, hashed_password) => {

    if(err){
      return res.status(500).json({ error: "password hashing failed" });
    }

    let user = new User({
      username,
      password: hashed_password,
      role: "user"
    });

    user.save()
    .then((u) => {
      return res.status(200).json({
        message: "User registered successfully",
        userId: u._id,
        username: u.username
      });
    })
    .catch(err => {
      if(err.code === 11000){
        return res.status(403).json({ error: "Username already exists" });
      }
      return res.status(500).json({ error: err.message });
    });

  });

});


// user Login......
server.post("/user/login", async (req, res) => {

  let { username, password } = req.body;

  if(!username || !password){
    return res.status(403).json({ error: "All fields are required" });
  }

  let user = await User.findOne({ username });

  if(!user){
    return res.status(403).json({ error: "Invalid username" });
  }

  bcrypt.compare(password, user.password, (err, result) => {

    if(!result){
      return res.status(403).json({ error: "Incorrect password" });
    }

    if(err){
      return res.status(405).json({ error: "Error occured while login please try again" });
    }

    return res.status(200).json({
      username: user.username
    });

  });

});


export default server;