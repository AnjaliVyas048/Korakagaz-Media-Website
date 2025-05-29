import dotenv from 'dotenv';

dotenv.config();

import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-enquiry', async (req, res) => {
  const data = req.body;

  console.log('mail data',data)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email_user,
      pass: process.env.email_pass,
    },
  });

const mailOptions = {
  from: `"KoraKagaz Website" <${process.env.email_user}>`,
  to: process.env.email_user, // This sends the enquiry to your own Gmail
  subject: 'New Enquiry from Website',
  html: `
    <h3>New Wedding Enquiry</h3>
    <p><strong>Couple Name:</strong> ${data.from_name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Wedding Date:</strong> ${data.wedding_date}</p>
    <p><strong>Wedding Location:</strong> ${data.wedding_location}</p>
    <p><strong>Package:</strong> ${data.package}</p>
    <p><strong>Guest Count:</strong> ${data.guest_count}</p>
    <p><strong>Event Details:</strong> ${data.event_details}</p>
    <p><strong>Moodboard Link:</strong> ${data.moodboard}</p>
    <p><strong>Heard from:</strong> ${data.source}</p>
  `,
};


  try {
    console.log('Attempting to send email...');
    console.log('Using email:', process.env.email_user);
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    res.status(200).json({ message: 'Enquiry sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      response: error.response
    });
    res.status(500).json({ message: 'Failed to send enquiry', error: error.message });
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
  console.log('Environment check:');
  console.log('email_user configured:', !!process.env.email_user);
  console.log('email_pass configured:', !!process.env.email_pass);
});

