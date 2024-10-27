import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const router = express.Router();

//ROUTE FOR REGISTER
router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        console.log(email, username, password);

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const usernameExists = await User.findOne({ username });
        if (usernameExists) {
            return res.status(400).json({ msg: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            username: username || "user",
            password: hashedPassword
        });

        await newUser.save();

        res.status(201).json({ msg: 'User registered successfully' });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('Server error');
    }
});

//ROUTE FOR LOGIN
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
            const payload = {
                id: user._id,
                email: user.email
            };

            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: 3600 },
                (error, token) => {
                    if (error) throw error;

                    res.json({
                        token,
                        user: { id: user._id, email: user.email }
                    });
                }
            );
        } else {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

export { router as authRouter };