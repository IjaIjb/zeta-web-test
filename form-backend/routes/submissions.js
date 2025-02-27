const express = require('express');
const nodemailer = require('nodemailer');
const Submission = require('../models/Submission');
const router = express.Router();


// Submit form data
router.post('/', async (req, res) => {
  try {
    const { first_name, last_name, email, phone, message } = req.body;

    // Save to MongoDB
    const newSubmission = new Submission({ first_name, last_name, email, phone, message });
    await newSubmission.save();

    // Send email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'jonathanreekurt@gmail.com',
      subject: 'New Form Submission',
      text: `
        New submission received:
        First Name: ${first_name}
        Last Name: ${last_name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Submission saved and email sent successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save submission or send email' });
  }
});

// Get all submissions
router.get('/', async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ createdAt: -1 });
    res.status(200).json(submissions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch submissions' });
  }
});

module.exports = router;
