
import express from 'express';
import projectmodel from '../models/projectModel'

const router = express.Router();


router.post('/project',async(req,res) => {
    const {porjectHed,projectDes,projectPic,fundtobeRaised,fundRaised} = req.body;
    
})