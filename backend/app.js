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
import Listener from './schema/Listener.schema.js';

// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
const passwordRegex = /^.{6,}$/;
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


mongoose.connect(process.env.DB_URL, {
  
  autoIndex: true

})

// Username-Generator.....
server.get("/user/generate-username", async (req, res) => {

  const adjectives = [
    "Silent","Calm","Gentle","Brave","Kind",
    "Lonely","Quiet","Soft","Hopeful","Free"
  ];

  const nouns = [
    "Sky","Moon","River","Leaf","Ocean",
    "Star","Cloud","Forest","Stone","Wind"
  ];

  let username;
  let exists = true;

  while(exists){
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const suffix = Math.floor(100 + Math.random() * 900); // 3 digits

    username = `${adj}${noun}${suffix}`;
    exists = await User.exists({ username });
  }

  return res.status(200).json({ username });

});


// Check - Username....
server.get("/user/check-username", async (req, res) => {

  const { username } = req.query;

  if(!username || username.length < 3){
    return res.status(400).json({ available: false });
  }

  const exists = await User.exists({ username: username.toLowerCase() });

  return res.status(200).json({
    available: !exists
  });
});



// User Sign-up...
server.post("/user/signup", async (req, res) => {

  let { username, password } = req.body;
  username = username.toLowerCase();

  if(!username || username.length < 3){
    return res.status(403).json({ error: "Username must be at least 3 characters long" });
  }

  if(!passwordRegex.test(password)){
    return res.status(403).json({ error: "Password must be at least 6 characters long" })
  }

  const existing = await User.findOne({ username });
  if(existing){
    return res.status(403).json({ error: "Username already taen" });
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

// Listener Signup....
server.post("/listener/signup", async (req, res) => {

  let { fullname, email, password, bio } = req.body;

  if(fullname.lenght < 3){
    return res.status(403).json({ error: "Fullname must be at least 3 characters long" });
  }

  if(!emailRegex.test(email)){
    return res.status(403).json({ error: "Invalid email" });
  }

  if(!passwordRegex.test(password)){
    return res.status(403).json({ error: "Password should be 6-20 characters with 1 uppercase, 1 lowercase and 1 number" });  
  }

  bcrypt.hash(password, 10, async (err, hashed_password) => {

    let listener = new Listener({
        fullname,
        email,
        password: hashed_password,
        bio,
        role: "listener",
        status: "pending"
    });

    listener.save()
    .then(l => {
      return res.status(200).json({
        message: "Listener registered. Awaiting admin approval."
      });
    })
    .catch(err => {
      if(err.code === 11000){
        return res.status(403).json({ error: "Email already exists" });
      }
      return res.status(500).json({ error: err.message });
    });

  });

});


export default server;