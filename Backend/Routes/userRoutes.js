

import express, { Router } from 'express'
const router = express.Router();
import bcrypt from 'bcrypt';

import usermodel from '../models/userModel'

Router.post('/signup',(req,res) => {
    const {username,email,phone,password} = req.body;
    if(!username || !email || !phone || !password){
        res.json({
            message:"all fields are mandetory"
        })
    }
    const ePassword = bcrypt()

    try{
       const userr =  usermodel.create({
            username,
            email,
            phone,

            
        })
    }catch(err){

    }
})