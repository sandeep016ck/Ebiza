import bcrypt from 'bcrypt';
import usermodel from '../models/userModel';
import jwt from 'jsonwebtoken';

const createUser = async (req, res) => {
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

        const userObject = user.toObject();
        delete userObject.password; // Exclude password from the response

        res.status(201).json({
            message: "User created successfully",
            user: userObject,
        });
    } catch (err) {
        console.error("Error in creating user:", err);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

const loginUser = async (req, res) => {
    const { phone, email, password } = req.body;

    if (!phone || !email || !password) {
        return res.status(400).json({
            message: "All fields are mandatory",
        });
    }

    try {
        const validUser = await usermodel.findOne({ email });
        if (!validUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, validUser.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const accesstoken = jwt.sign(
            {
                user: {
                    username: validUser.username,
                    email: validUser.email,
                    id: validUser.id,
                },
            },
            process.env.SECRET_KEY,
            { expiresIn: "10m" }
        );

        res.status(200).json({
            message: "Login successful",
            token:accesstoken
        });
    } catch (error) {
        console.error("Error in login user:", error);
        return res.status(500).json({
            message: "Error while logging in",
        });
    }
};

export default {
    createUser,
    loginUser,
};
