import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';

import usermodel from '../models/userModel';

router.post('/signup', async (req, res) => {
  const { username, email, phone, password } = req.body;

  if (!username || !email || !phone || !password) {
    return res.status(400).json({
      message: "All fields are mandatory",
    });
  }

  try {
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const user = await usermodel.create({
      username,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "User created successfully",
      user, // Optionally, exclude sensitive info like password in the response
    });
  } catch (err) {
    console.error("Error in creating user:", err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

//signIn
router.post('/signin', async(req,res) => {
    const {phone,email,password} = req.body();

    if(!phone || !email || !password){
        return res.status(400).json({
            message: "All fields are mandatory",
        });
    }
    try {

        const validUser = await usermodel.findOne({email});

        

        
    } catch (error) {
        console.log("error in login user",error);
        return res.status(500).json({
            message:"error while login"
        })
    }
})

export default router;
