// import express from "express";
// import nodemailer from "nodemailer";
// const router = express.Router();

// const transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "maddison53@ethereal.email",
//     pass: "jn7jnAPss4f63QBp6D",
//   },
// });

// router.post('/', async (req, res) => {
//     console.log("hello_backend");
//     try {
//         const { email } = req.body;
//         console.log(email, "hello");
//         res.status(200).send('Email sent successfully');
//     } catch (error) {
//         console.log(error.message);
//         res.status(500).send({ message: error.message });
//     }
// });

// export default router;  

import express from "express";
import nodemailer from "nodemailer";
const router = express.Router();

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: "14rajuyadav2004@gmail.com",
    pass: `${process.env.EMAIL_PASS}`,
  },
});

router.post('/', async (req, res) => {
    console.log("hello_backend");
    try {
        const { email } = req.body;
        console.log(email, "hello");
        if(!email){
            return res.status(400).send('Email is required');
            console.log("Email is required");
        }
        // Define email options
        const mailOptions = {
            from: '14rajuyadav2004@gmail.com',
            to: email,
            subject: 'CodeDeck Purchase',
            text: 'your purchase was successful',
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message });
    }
});

export default router;